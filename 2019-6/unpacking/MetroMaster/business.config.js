const config = require('./custom.config')

module.exports = {
    serializer: {
        createModuleIdFactory: config.createModuleIdFactory,
        processModuleFilter: config.processModuleFilter
    }
}
