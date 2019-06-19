import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class TimerControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _startTimer: HTMLElement;
    private _startTimerlbl: HTMLElement;

    private _stopTimer: HTMLElement;
    private _stopTimerlbl: HTMLElement;

    private _resetTimer: HTMLElement;
    private _resetTimerlbl: HTMLElement;

    private _container: HTMLDivElement;
    private _mainContainer: HTMLDivElement;
    private _timerContainer: HTMLDivElement;
    private _timerControlContainer: HTMLDivElement;

    private _divider1: HTMLDivElement;
    private _internal_divider1: HTMLDivElement;   

    private _divider2: HTMLDivElement;
    private _internal_divider2: HTMLDivElement;

    private _divider3: HTMLDivElement;
    private _internal_divider3: HTMLDivElement;

    private _numbers_tenhour_moveten: HTMLDivElement;
    private _internal_numbers_tenhour_moveten: HTMLDivElement;    

    private _numbers_hour_moveten: HTMLDivElement;
    private _internal_numbers_hour_moveten: HTMLDivElement;  

    private _numbers_tenminute_movesix: HTMLDivElement;
    private _internal_numbers_tenminute_movesix: HTMLDivElement; 

    private _numbers_minute_moveten: HTMLDivElement;
    private _internal_numbers_minute_moveten: HTMLDivElement; 

    private _numbers_tensecond_movesix: HTMLDivElement;
    private _internal_numbers_tensecond_movesix: HTMLDivElement; 

    private _numbers_second_moveten: HTMLDivElement;
    private _internal_numbers_second_moveten: HTMLDivElement; 

    private _numbers_milisecond_moveten: HTMLDivElement;
    private _internal_numbers_milisecond_moveten: HTMLDivElement; 

    private _numbers_tenmilisecond_moveten: HTMLDivElement;
    private _internal_numbers_tenmilisecond_moveten: HTMLDivElement; 

    private _numbers_hundredmilisecond_moveten: HTMLDivElement;
    private _internal_numbers_hundredmilisecond_moveten: HTMLDivElement; 

    private _context: ComponentFramework.Context<IInputs>;


	/**
	 * Empty constructor.
	 */
    constructor() {

    }

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='starndard', it will receive an empty div element within which it can render its content.
	 */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
        // Add control initialization code        

        this._context = context;
        this._container = container;

        this._startTimer = document.createElement("input");
        this._startTimer.setAttribute("id", "start");
        this._startTimer.setAttribute("type", "radio");
        this._startTimer.setAttribute("name", "controls");

        this._stopTimer = document.createElement("input");
        this._stopTimer.setAttribute("id", "stop");
        this._stopTimer.setAttribute("type", "radio");
        this._stopTimer.setAttribute("name", "controls");

        this._resetTimer = document.createElement("input");
        this._resetTimer.setAttribute("id", "reset");
        this._resetTimer.setAttribute("type", "radio");
        this._resetTimer.setAttribute("name", "controls");

        this._timerControlContainer = document.createElement("div");
        this._timerControlContainer.setAttribute("id", "timer_controls");

        this._timerContainer = document.createElement("div");
        this._timerContainer.setAttribute("class", "timer");

        this._startTimerlbl = document.createElement("label");
        this._startTimerlbl.textContent = "Start";
        this._startTimerlbl.setAttribute("for", "start");

        this._stopTimerlbl = document.createElement("label");
        this._stopTimerlbl.textContent = "Stop";
        this._stopTimerlbl.setAttribute("for", "stop");

        this._resetTimerlbl = document.createElement("label");
        this._resetTimerlbl.textContent = "Reset";
        this._resetTimerlbl.setAttribute("for", "reset");

        this._container.appendChild(this._startTimer);
        this._container.appendChild(this._stopTimer);
        this._container.appendChild(this._resetTimer);
        this._container.appendChild(this._timerControlContainer);
        this._container.appendChild(this._timerContainer);
        this._timerControlContainer.appendChild(this._startTimerlbl);
        this._timerControlContainer.appendChild(this._stopTimerlbl);
        this._timerControlContainer.appendChild(this._resetTimerlbl);

        //numbers tenhour moveten

        this._numbers_tenhour_moveten = document.createElement("div");
        this._numbers_tenhour_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_tenhour_moveten);

        this._internal_numbers_tenhour_moveten = document.createElement("div");
        this._internal_numbers_tenhour_moveten.setAttribute("class", "numbers tenhour moveten");
        this._internal_numbers_tenhour_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_tenhour_moveten.appendChild(this._internal_numbers_tenhour_moveten);

        //numbers hour moveten

        this._numbers_hour_moveten = document.createElement("div");
        this._numbers_hour_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_hour_moveten);

        this._internal_numbers_hour_moveten = document.createElement("div");
        this._internal_numbers_hour_moveten.setAttribute("class", "numbers hour moveten");
        this._internal_numbers_hour_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_hour_moveten.appendChild(this._internal_numbers_hour_moveten);

        //divider1

        this._divider1 = document.createElement("div");
        this._divider1.setAttribute("class", "cell divider");
        this._timerContainer.appendChild(this._divider1);

        this._internal_divider1 = document.createElement("div");
        this._internal_divider1.setAttribute("class", "numbers");
        this._internal_divider1.textContent = ":";
        this._divider1.appendChild(this._internal_divider1);

        //numbers tenminute movesix

        this._numbers_tenminute_movesix = document.createElement("div");
        this._numbers_tenminute_movesix.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_tenminute_movesix);

        this._internal_numbers_tenminute_movesix = document.createElement("div");
        this._internal_numbers_tenminute_movesix.setAttribute("class", "numbers tenminute movesix");
        this._internal_numbers_tenminute_movesix.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_tenminute_movesix.appendChild(this._internal_numbers_tenminute_movesix);

        //numbers minute moveten

        this._numbers_minute_moveten = document.createElement("div");
        this._numbers_minute_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_minute_moveten);

        this._internal_numbers_minute_moveten = document.createElement("div");
        this._internal_numbers_minute_moveten.setAttribute("class", "numbers minute moveten");
        this._internal_numbers_minute_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_minute_moveten.appendChild(this._internal_numbers_minute_moveten);

        //divider2

        this._divider2 = document.createElement("div");
        this._divider2.setAttribute("class", "cell divider");
        this._timerContainer.appendChild(this._divider2);

        this._internal_divider2 = document.createElement("div");
        this._internal_divider2.setAttribute("class", "numbers");
        this._internal_divider2.textContent = ":";
        this._divider2.appendChild(this._internal_divider2);

        //numbers tensecond movesix
        this._numbers_tensecond_movesix = document.createElement("div");
        this._numbers_tensecond_movesix.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_tensecond_movesix);

        this._internal_numbers_tensecond_movesix = document.createElement("div");
        this._internal_numbers_tensecond_movesix.setAttribute("class", "numbers tensecond movesix");
        this._internal_numbers_tensecond_movesix.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_tensecond_movesix.appendChild(this._internal_numbers_tensecond_movesix);

        //numbers second moveten
        this._numbers_second_moveten = document.createElement("div");
        this._numbers_second_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_second_moveten);

        this._internal_numbers_second_moveten = document.createElement("div");
        this._internal_numbers_second_moveten.setAttribute("class", "numbers second moveten");
        this._internal_numbers_second_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_second_moveten.appendChild(this._internal_numbers_second_moveten);

        //divider3
        this._divider3 = document.createElement("div");
        this._divider3.setAttribute("class", "cell divider");
        this._timerContainer.appendChild(this._divider3);

        this._internal_divider3 = document.createElement("div");
        this._internal_divider3.setAttribute("class", "numbers");
        this._internal_divider3.textContent = ":";
        this._divider3.appendChild(this._internal_divider3);

        //numbers milisecond moveten
        this._numbers_milisecond_moveten = document.createElement("div");
        this._numbers_milisecond_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_milisecond_moveten);

        this._internal_numbers_milisecond_moveten = document.createElement("div");
        this._internal_numbers_milisecond_moveten.setAttribute("class", "numbers milisecond moveten");
        this._internal_numbers_milisecond_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_milisecond_moveten.appendChild(this._internal_numbers_milisecond_moveten);


        //numbers tenmilisecond moveten
        this._numbers_tenmilisecond_moveten = document.createElement("div");
        this._numbers_tenmilisecond_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_tenmilisecond_moveten);

        this._internal_numbers_tenmilisecond_moveten = document.createElement("div");
        this._internal_numbers_tenmilisecond_moveten.setAttribute("class", "numbers tenmilisecond moveten");
        this._internal_numbers_tenmilisecond_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_tenmilisecond_moveten.appendChild(this._internal_numbers_tenmilisecond_moveten);


        //numbers hundredmilisecond moveten
        this._numbers_hundredmilisecond_moveten = document.createElement("div");
        this._numbers_hundredmilisecond_moveten.setAttribute("class", "cell");
        this._timerContainer.appendChild(this._numbers_hundredmilisecond_moveten);

        this._internal_numbers_hundredmilisecond_moveten = document.createElement("div");
        this._internal_numbers_hundredmilisecond_moveten.setAttribute("class", "numbers second moveten");
        this._internal_numbers_hundredmilisecond_moveten.textContent = "0 1 2 3 4 5 6 7 8 9";
        this._numbers_hundredmilisecond_moveten.appendChild(this._internal_numbers_hundredmilisecond_moveten);

    }

    public StartTimerEvent(evt: Event): void {

    }


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Add code to update control view
        this._context = context;
    }

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
    public getOutputs(): IOutputs {
        return {};
    }

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
