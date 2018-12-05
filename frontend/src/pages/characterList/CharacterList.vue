<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
  	<v-layout row align-center mt-4>
  		<v-flex >
  			<v-card>
  				<v-toolbar color="#9a35b7" dark>
      			<v-toolbar-title style="font-family:milonga; font-size:300%; text-align: center;">My Characters</v-toolbar-title>
      			<v-spacer></v-spacer> 
      			<v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search">
          	</v-text-field>
         	</v-toolbar>
         	<v-flex px-5 pb-5 style ="background-image: linear-gradient(to right, #cd4295, #fece56);">
  			<v-card >
         	<v-data-table
         	v-bind:headers="tableHeaders"
         	v-bind:items="characters"
         	v-bind:search="search"
         	v-bind:rows-per-page-items=[10]>
         		<template slot="items" slot-scope="props">
         			<tr>
         				<td>{{props.item.name}}</td>
         				<td>{{props.item.level}}</td>
         				<td>{{props.item.race}}</td>
         				<td>{{props.item.class}}</td>
         				<td class="text-xs-center">
                  <v-flex>
                    <v-btn icon class="mx-0">
                      <v-icon color="green">edit</v-icon>
                    </v-btn>
                    <v-btn icon class="mx-0">
                      <v-icon color="red">delete</v-icon>
                    </v-btn>
                  </v-flex>
                </td>
              </tr>
         		</template>
         	</v-data-table>
        </v-card>
        <v-flex xs12 sm5 md3>
        	<v-btn  large color="#fece56" to="/ChooseRace">New Character<v-icon right dark>fas fa-pencil-alt</v-icon></v-btn>
      	</v-flex>
      </v-flex>
      	</v-card>
      </v-flex>
		</v-layout> 
	</v-container>
</template>

<script>
import Toolbar from "../universalComponents/toolbar.vue"
import Navigation from "../universalComponents/navigation.vue"

	export default{
		name: 'CharacterList',
		components: {Toolbar,Navigation},
		data(){
			return{
				tableHeaders:[
					{text: 'Name', value: 'name', class:"text-xs-left"},
					{text: 'Level', value: 'level', class:"text-xs-left"},
					{text: 'Race', value: 'race', class:"text-xs-left"},
					{text: 'Class', value: 'class', class:"text-xs-left"},
					{text: 'Actions', value: 'action', class:"text-xs-center"}
				],
				search:'',
				pagination: {},
				characters:[
				{
					value: false,
					name: 'Magnus Burnside',
					level: 2,
					race: 'Dwarf',
					class: 'Fighter'
				},
				{
					value: false,
					name: 'Anya Starkfell',
					level: 1,
					race: 'Human',
					class: 'Rogue'
				},
        {
          value: false,
          name: 'Kaytlin Lafleur',
          level: 1,
          race: 'Elf',
          class: 'Druid'
        },
        {
          value: false,
          name: 'Nicholas Partridge',
          level: 2,
          race: 'Dragonborn',
          class: 'Wizard'
        },
        {
          value: false,
          name: 'Justin Smith',
          level: 4,
          race: 'Half-Orc',
          class: 'Barbarian'
        },
        {
          value: false,
          name: 'Felipe Palacios',
          level: 6,
          race: 'Dwarf',
          class: 'Cleric'
        }
        ]
			}
		}
	}

</script>
