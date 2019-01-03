<template>
	<div class="app-frame">
		<div class="container">
			<div class="row">
				<player-column
						v-for="iteration in number_of_players"
						:key="iteration"
						:number_of_rounds="number_of_rounds"
						:additional_classes="player_cols_class">
				</player-column>
			</div>
		</div>
	</div>
</template>

<script>
	import PlayerHeader from "./components/player-header";
	import PlayerRound from "./components/player-round";
	import PlayerColumn from "./components/player-column";

	export default {
		name: 'App',
		components: {PlayerColumn, PlayerHeader, PlayerRound},
		data() {
			return {
				number_of_players: 3, // Min 2, max 6
			}
		},
		methods: {
			/**
			 * Ajoute un nouveau joueur à la partie
			 */
			addNewPlayer() {
				if (this.number_of_players >= 6) {
					return;
				}
				this.number_of_players++;
			}
		},
		computed: {
			/**
			 * Nombre de rondes dans la partie selon le nombre de joueurs inscrits
			 * @return {number}
			 */
			number_of_rounds() {
				return Math.min(60 / this.number_of_players, 20);
			},

			/**
			 * Classe pour le nombre de colonnes approprié pour chaque joueur
			 * @return {string}
			 */
			player_cols_class() {
				const starterClass = 'col-md-';
				switch (this.number_of_players) {
					case 2:
						return starterClass + '6';
					case 3:
						return starterClass + '4';
					case 4:
						return starterClass + '3';
					case 5:
						return starterClass + '2';
					case 6:
						return starterClass + '2';
					default:
						return starterClass + '2';
				}
			}
		},
	}
</script>

<style lang="scss">
	@import "assets/fonts/fontello/css/wizard.css";
	@import "assets/scss/main";
</style>