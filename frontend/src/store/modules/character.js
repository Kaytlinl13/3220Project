import axios from 'axios'
export const character ={
	namespaced: true,
	state: {
		race: '',
		background: '',
		class_type: '',
		name: '',
		level: 1,
		alignment: '',
		strength: 10,
		str_mod: '',
		str_st: '',
		dexterity: 10,
		dex_mod: '',
		dex_st: '',
		constitution: 10,
		con_mod: '',
		intelligence: 10,
		int_mod: '',
		int_st: '',
		wisdom: 10,
		wis_mod: '',
		wis_st: '',
		charisma: 10,
		cha_mod: '',
		cha_st: '',
		proficiencyBonus: 2,
		acrobatics: '',
		acr_pro: false,
		animalHandling: '',
		ani_pro: false,
		arcana: '',
		arc_pro: false,
		athletics: '',
		ath_pro: false,
		deception: '',
		dec_pro: false,
		history: '',
		his_pro: false,
		insight: '',
		ins_pro: false,
		intimidation: '',
		inti_pro: false,
		investigation: '',
		inv_pro: false,
		medicine: '',
		med_pro: false,
		nature: '',
		nat_pro: false,
		perception: '',
		perc_pro: false,
		performance: '',
		perf_pro: false,
		persuasion: '',
		pers_pro: false,
		religion: '',
		rel_pro: false,
		sleightofhands: '',
		soh_pro: false,
		stealth: '',
		ste_pro: false,
		survival: '',
		sur_pro: false,
		passiveWisdom: 10,
		armorclass: 10,
		initiative: '',
		speed: 25,
		hitPoints: 0,
		hitDice: '',
		langMod: 1,
		languagesKnown: [],
		personalityTraits: '',
		ideals: '',
		bonds: '',
		flaws: '',
		cantrips: 0,
		lvl1spells: 0,
		lvl2spells: 0,
		lvl3spells: 0,
		lvl4spells: 0,
		lvl5spells: 0,
		lvl6spells: 0,
		lvl7spells: 0,
		lvl8spells: 0,
		lvl9spells: 0
	},
	mutations: {
    	setRace(state, race_chosen){
    	  state.race  = race_chosen
    	},
    	setBackground(state, background_chosen){
    	  state.background  = background_chosen
    	},
    	setClass(state, class_chosen){
    	  state.class_type  = class_chosen
    	},
    	setName(state, name_chosen){
    	  state.name  = name_chosen
    	},
    	setLevel(state, level_chosen){
    	  state.level = level_chosen 
    	},
    	setAlignment(state, alignment_chosen){
    	  state.alignment  = alignment_chosen
    	}
	},
	getters: {
		getRace( state ){
     		return state.race;
   		},
   		getBackground( state ){
     		return state.background;
   		},
   		getClass( state ){
     		return state.class_type;
   		},
   		getName( state ){
     		return state.name;
   		},
   		getLevel( state ){
     		return state.level;
   		},
   		getAlignment( state ){
     		return state.alignment;
   		}
	}
}