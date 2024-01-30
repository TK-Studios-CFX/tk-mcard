const Lib = global.exports['tk-lib'].GetLib();
const Logger = Lib.Functions.Logger(GetCurrentResourceName(), 'Main');

async function init() {
	Logger.debug('Starting Boot Process');
    Lib.Functions.VersionChecker(GetCurrentResourceName(), Lib.Functions.GetResourceVersion(GetCurrentResourceName()));
    Lib.Functions.EnsureResourceName(GetCurrentResourceName(), 'tk-mcard');
	Logger.debug('Completed Boot Process');
}

init();