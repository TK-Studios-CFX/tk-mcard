const Lib = global.exports['tk-lib'].GetLib();
const Logger = Lib.Functions.Logger(GetCurrentResourceName(), "Main");

let IsVisible = false;

function ShowUI() {
	IsVisible = true;
	SendNUIMessage({
		module: GetCurrentResourceName(),
		action: "SHOW_UI",
	});
	Logger.debug(`Showing UI`);
}

exports("ShowUI", ShowUI);

function HideUI() {
	IsVisible = false;
	SendNUIMessage({
		module: GetCurrentResourceName(),
		action: "HIDE_UI",
	});
	Logger.debug(`Hiding UI`);
}

exports("HideUI", HideUI);

RegisterCommand("mcard", () => {
	if (IsVisible) return HideUI();
	return ShowUI();
});

Logger.log(`Initialized Successfully`);