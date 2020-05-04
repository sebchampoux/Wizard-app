<template>
	<div class="app-frame" :class="{ 'app-frame--names-confirmed': all_names_confirmed }">
		<div class="players-head">
			<div class="container-fluid">
				<div class="row">
					<div
						v-for="player_number in number_of_players"
						:key="player_number - 1"
						:class="player_cols_class">
						<player-header
							:player_score_array="players_scores[player_number - 1]"
							:player_index="player_number - 1"
							@name-confirmed="name_confirmed">
						</player-header>
					</div>
					<div
							class="add-new-player"
							:class="player_cols_class"
							v-if="can_add_more_players">
						<button class="btn btn-success" @click="add_new_player">+ Joueur</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid rounds-wrapper">
			<div class="row">
				<div
						v-for="player_number in number_of_players"
						:key="player_number - 1"
						class="player-column"
						:class="player_cols_class">
						<player-round
							v-for="round_number in number_of_rounds"
							:key="round_number - 1"
							:round_index="round_number - 1"
							:player_index="player_number - 1"
							@score-updated="update_player_score"
							additional_classes="player-column__player-round">
						</player-round>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PlayerHeader from './components/player-header';
	import PlayerRound from './components/player-round';

	const MAX_NUMBER_OF_PLAYERS = 6;

	export default {
		name: 'App',
		components: {
			PlayerHeader,
			PlayerRound
		},
		data() {
			return {
				number_of_players: 2,
				players_scores: [
					[],
					[],
				],
				confirmed_names: [
					false,
					false,
				],
			}
		},
		methods: {
			add_new_player() {
				if(this.can_add_more_players) {
					this.number_of_players++;
					this.players_scores.push([]);
					this.confirmed_names.push(false);
				}
			},
			update_player_score(e) {
				this.players_scores[e.player_index].splice(e.round_index, 1, e.score);
			},
			name_confirmed(e) {
				this.confirmed_names.splice(e.player_index, 1, true);
			},
		},
		computed: {
			/**
			 * Classe pour le nombre de colonnes approprié pour chaque joueur
			 * @return {string}
			 */
			player_cols_class() {
				const starterClass = 'col-sm-';
				switch (this.number_of_players) {
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

			number_of_rounds() {
				return Math.min(60 / this.number_of_players, 20);
			},

			/**
			 * Vérifie s'il est possible d'ajouter d'autres joueurs (i.e. le nombre de joueurs actuel
			 * est inférieur au maximum autorisé)
			 *
			 * @return {boolean}
			 */
			can_add_more_players() {
				return this.number_of_players < MAX_NUMBER_OF_PLAYERS;
			},

			all_names_confirmed() {
				return this.confirmed_names.every(e => e);
			}
		},
	}
</script>

<style lang="scss">
	@import "assets/fonts/fontello/css/wizard.css";
	@import "assets/scss/main";
</style>