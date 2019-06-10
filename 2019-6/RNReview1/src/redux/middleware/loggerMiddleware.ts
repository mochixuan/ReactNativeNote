const logger = (store: any) => (next: any) => (action: any) => {
  if (typeof action === 'function') console.warn('dispatching a function')
  else console.warn('loggerMiddleware dispatch', action)
  let result = next(action)
  console.warn('loggerMiddleware next state', store.getState())
  return result
}

const crashReporter = (store: any) => (next: any) => (action: any) => {
  try {
    return next(action)
  } catch (err) {
    console.error('crashReporterMiddleware Caught an exception!', err)
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState()
    //   }
    // })
    throw err
  }
}

export { logger, crashReporter }
