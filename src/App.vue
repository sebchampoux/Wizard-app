<template>
	<div class="app-frame">
		<div class="container">
			<div class="row">
				<!-- Les colonnes joueur -->
				<player-column
						v-for="player_number in number_of_players"
						:key="player_number - 1"
						:player_index="player_number - 1"
						:additional_classes="player_cols_class">
				</player-column>
				<!-- La colonne ajout nouveau joueur -->
				<div
						class="add-new-player"
						:class="player_cols_class"
						v-if="can_add_more_players">
					<button class="btn btn-success" @click="add_new_player">+ Joueur</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PlayerColumn from "./components/player-column";

	import { mapGetters, mapMutations } from 'vuex';
	import { MAX_NUMBER_OF_PLAYERS } from "./store/store";

	export default {
		name: 'App',
		components: {PlayerColumn},
		methods: {
			...mapMutations([
				'add_new_player'
			])
		},
		computed: {
			...mapGetters([
				'number_of_players'
			]),

			/**
			 * Classe pour le nombre de colonnes approprié pour chaque joueur
			 * @return {string}
			 */
			player_cols_class() {
				const starterClass = 'col-sm-';
				switch (this.$store.getters.number_of_players) {
					case 2:
						return starterClass + '4';
					case 3:
						return starterClass + '3';
					case 4:
						return starterClass + '2';
					case 5:
						return starterClass + '2';
					case 6:
						return starterClass + '2';
					default:
						return starterClass + '2';
				}
			},

			/**
			 * Vérifie s'il est possible d'ajouter d'autres joueurs (i.e. le nombre de joueurs actuel
			 * est inférieur au maximum autorisé)
			 *
			 * @return {boolean}
			 */
			can_add_more_players() {
				return this.$store.getters.number_of_players < MAX_NUMBER_OF_PLAYERS;
			}
		},
	}
</script>

<style lang="scss">
	@import "assets/fonts/fontello/css/wizard.css";
	@import "assets/scss/main";
</style>