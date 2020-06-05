warn("loading the triggers file");

///////////////////////
// Trigger listeners //
///////////////////////

// every function just logs when it gets fired, and shows the data
Trigger.prototype.StructureBuiltAction = function(data)
{
	//warn("The OnStructureBuilt event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.ConstructionStartedAction = function(data)
{
	//warn("The OnConstructionStarted event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.TrainingFinishedAction = function(data)
{
	//warn("The OnTrainingFinished event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.TrainingQueuedAction = function(data)
{
	//warn("The OnTrainingQueued event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.ResearchFinishedAction = function(data)
{
	//warn("The OnResearchFinished event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.ResearchQueuedAction = function(data)
{
	//warn("The OnResearchQueued event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.OwnershipChangedAction = function(data)
{
	//warn("The OnOwnershipChanged event happened with the following data:");
	//warn(uneval(data));
};

Trigger.prototype.PlayerCommandAction = function(data)
{
	//warn("The OnPlayerCommand event happened with the following data:");
	//warn(uneval(data));
};


Trigger.prototype.IntervalActionCavAttack = function(data)
{
	//check if player 3 is around
	var all_ents = TriggerHelper.GetEntitiesByPlayer(3);	
	if (all_ents.length == 0)
	{
		return;
	}


	//warn("The OnInterval event happened with the following data:");
	//warn(uneval(data));
	this.numberOfTimerTrigger++;
	if (this.numberOfTimerTrigger >= this.maxNumberOfTimerTrigger)
		this.DisableTrigger("OnInterval", "IntervalAction");


	// get target position
	var cmpTargetPosition = Engine.QueryInterface(2747, IID_Position).GetPosition2D();
	

	//check if any idle soldiers are around and ask them to attack
	for (let i = 0; i < all_ents.length; ++i)
	{
		let cmpUnitAI = Engine.QueryInterface(all_ents[i], IID_UnitAI);
		if (cmpUnitAI)
		{
			if (cmpUnitAI.IsIdle() && Engine.QueryInterface(all_ents[i], IID_Attack))
			{
				//warn("found idle soldier")
				cmpUnitAI.WalkAndFight(cmpTargetPosition.x,cmpTargetPosition.y,null);
			}
		}
	}


	//spawn attacking party
	var ents1 = TriggerHelper.SpawnUnits(2911,"units/mace_cavalry_spearman_a",8,3);
	var ents2 = TriggerHelper.SpawnUnits(2911,"units/mace_cavalry_javelinist_a",5,3);
	var full_list = ents1.concat(ents2);

	//warn(uneval(full_list));
	//warn(uneval(cmpTargetPosition.GetPosition2D()));	

	for (let i = 0; i < full_list.length; ++i)
	{
		let cmpUnitAI = Engine.QueryInterface(full_list[i], IID_UnitAI);
		if (cmpUnitAI)
		{
			//var targets_i = cmpUnitAI.FindWalkAndFightTargets(full_list[i]);			
			cmpUnitAI.SwitchToStance("violent");
			//cmpUnitAI.Attack(2747);
			cmpUnitAI.WalkAndFight(cmpTargetPosition.x,cmpTargetPosition.y,null);
			//warn(uneval(targets_i));
		}
	}
	

	// try out the dialog
	/*var cmpGUIInterface = Engine.QueryInterface(SYSTEM_ENTITY, IID_GuiInterface);
	cmpGUIInterface.PushNotification({
		"type": "dialog",
		"players": [1,2,3,4,5,6,7,8],
		"dialogName": "yes-no",
		"data": {
			"text": {
				"caption": {
					"message": markForTranslation("Testing the yes-no dialog. Do you want to say sure or rather not?"),
					"translateMessage": true,
				},
			},
			"button1": {
				"caption": {
					"message": markForTranslation("Sure"),
					"translateMessage": true,
				},
				"tooltip": {
					"message": markForTranslation("Say sure"),
					"translateMessage": true,
				},
			},
			"button2": {
				"caption": {
					"message": markForTranslation("Rather not"),
					"translateMessage": true,
				},
				"tooltip": {
					"message": markForTranslation("Say rather not"),
					"translateMessage": true,
				},
			},

		},
	});*/
};

Trigger.prototype.IntervalAction = function(data)
{
	//check if player 3 is around
	var all_ents = TriggerHelper.GetEntitiesByPlayer(3);	
	if (all_ents.length == 0)
	{
		return;
	}


	//warn("The OnInterval event happened with the following data:");
	//warn(uneval(data));
	this.numberOfTimerTrigger++;
	if (this.numberOfTimerTrigger >= this.maxNumberOfTimerTrigger)
		this.DisableTrigger("OnInterval", "IntervalAction");


	// get target position
	var cmpTargetPosition = Engine.QueryInterface(2747, IID_Position).GetPosition2D();
	

	//check if any idle soldiers are around and ask them to attack
	for (let i = 0; i < all_ents.length; ++i)
	{
		let cmpUnitAI = Engine.QueryInterface(all_ents[i], IID_UnitAI);
		if (cmpUnitAI)
		{
			if (cmpUnitAI.IsIdle() && Engine.QueryInterface(all_ents[i], IID_Attack))
			{
				//warn("found idle soldier")
				cmpUnitAI.WalkAndFight(cmpTargetPosition.x,cmpTargetPosition.y,null);
			}
		}
	}


	//spawn attacking party
	var ents1 = TriggerHelper.SpawnUnits(2906,"units/mace_infantry_pikeman_b",5,3);
	var ents2 = TriggerHelper.SpawnUnits(2906,"units/mace_infantry_javelinist_b",5,3);
	var ents3 = TriggerHelper.SpawnUnits(2906,"units/mace_infantry_archer_b",5,3);
	var full_list = ents1.concat(ents2,ents3);

	//warn(uneval(full_list));
	//warn(uneval(cmpTargetPosition.GetPosition2D()));	

	for (let i = 0; i < full_list.length; ++i)
	{
		let cmpUnitAI = Engine.QueryInterface(full_list[i], IID_UnitAI);
		if (cmpUnitAI)
		{
			//var targets_i = cmpUnitAI.FindWalkAndFightTargets(full_list[i]);			
			cmpUnitAI.SwitchToStance("violent");
			//cmpUnitAI.Attack(2747);
			cmpUnitAI.WalkAndFight(cmpTargetPosition.x,cmpTargetPosition.y,null);
			//warn(uneval(targets_i));
		}
	}
	

	// try out the dialog
	/*var cmpGUIInterface = Engine.QueryInterface(SYSTEM_ENTITY, IID_GuiInterface);
	cmpGUIInterface.PushNotification({
		"type": "dialog",
		"players": [1,2,3,4,5,6,7,8],
		"dialogName": "yes-no",
		"data": {
			"text": {
				"caption": {
					"message": markForTranslation("Testing the yes-no dialog. Do you want to say sure or rather not?"),
					"translateMessage": true,
				},
			},
			"button1": {
				"caption": {
					"message": markForTranslation("Sure"),
					"translateMessage": true,
				},
				"tooltip": {
					"message": markForTranslation("Say sure"),
					"translateMessage": true,
				},
			},
			"button2": {
				"caption": {
					"message": markForTranslation("Rather not"),
					"translateMessage": true,
				},
				"tooltip": {
					"message": markForTranslation("Say rather not"),
					"translateMessage": true,
				},
			},

		},
	});*/
};

Trigger.prototype.RangeAction = function(data)
{
	warn("The OnRange event happened with the following data:");
	warn(uneval(data));
};

{
	let cmpTrigger = Engine.QueryInterface(SYSTEM_ENTITY, IID_Trigger);

	// Activate all possible triggers
	let data = { "enabled": true };
	cmpTrigger.RegisterTrigger("OnStructureBuilt", "StructureBuiltAction", data);
	cmpTrigger.RegisterTrigger("OnConstructionStarted", "ConstructionStartedAction", data);
	cmpTrigger.RegisterTrigger("OnTrainingFinished", "TrainingFinishedAction", data);
	cmpTrigger.RegisterTrigger("OnTrainingQueued", "TrainingQueuedAction", data);
	cmpTrigger.RegisterTrigger("OnResearchFinished", "ResearchFinishedAction", data);
	cmpTrigger.RegisterTrigger("OnResearchQueued", "ResearchQueuedAction", data);
	cmpTrigger.RegisterTrigger("OnOwnershipChanged", "OwnershipChangedAction", data);
	cmpTrigger.RegisterTrigger("OnPlayerCommand", "PlayerCommandAction", data);

	cmpTrigger.numberOfTimerTrigger = 0;
	cmpTrigger.maxNumberOfTimerTrigger = 1000; // execute it that many times

	cmpTrigger.RegisterTrigger("OnInterval", "IntervalActionCavAttack", {
		"enabled": true,
		"delay": 45 * 1000,
		"interval": 90 * 1000,
	});


	cmpTrigger.RegisterTrigger("OnInterval", "IntervalAction", {
		"enabled": true,
		"delay": 30 * 1000,
		"interval": 60 * 1000,
	});

	cmpTrigger.RegisterTrigger("OnRange", "RangeAction", {
		"entities": cmpTrigger.GetTriggerPoints("A"), // central points to calculate the range circles
		"players": [1], // only count entities of player 1
		"maxRange": 40,
		"requiredComponent": IID_UnitAI, // only count units in range
		"enabled": true,
	});
};

