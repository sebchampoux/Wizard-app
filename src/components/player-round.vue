<template>
	<div class="player-round" :class="[{'player-round--lighter-bg': is_even}, additional_classes]">
		<p class="player-round__round-number">{{ round_number }}</p>
		<div class="player-round__score-wrapper">
			<h1 class="player-round__score">{{ round_score }}</h1>
		</div>
		<div class="player-round__inputs-wrapper">
			<input type="number" class="form-control player-round__input" :class="{'player-round__input--error': error_border.is_active}" placeholder="Estimation" v-model="guess">
			<input type="number" class="form-control player-round__input" :class="{'player-round__input--error': no_result_entered}" placeholder="Résultat" v-model="real_result" v-if="round_over">
			<div class="player-round__buttons-wrapper" v-else>
				<button type="button" class="btn btn-sm btn-success" @click="finish_round(true)"><i class="icon-ok"></i></button>
				<button type="button" class="btn btn-sm btn-danger" @click="finish_round(false)"><i class="icon-cancel"></i></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "player-round",

		data() {
			return {
				guess: null,
				real_result: null,
				round_over: false,

				error_border: {
					display_time: 2, // en secondes
					is_active: false,
				}
			}
		},
		methods: {
			/**
			 * Calcule la différence entre le nombre de mains estimé et celui remporté
			 *
			 * @return {number} différence entre estimation et résultat final
			 */
			get_difference() {
				return Math.abs(this.guess - this.real_result);
			},

			/**
			 * Met fin à la ronde en cours (affiche le champ vrai résultat)
			 * Fonctionne seulement si une estimation a été saisie pour la ronde en cours
			 *
			 * @param {boolean} success - Succès ou échec du joueur pour la ronde en cours
			 */
			finish_round(success = false) {
				if(this.guess === null) {
					this.display_guess_error();
					return;
				}
				this.round_over = true;
				if(success) {
					this.real_result = this.guess;
				}
			},

			/**
			 * Affiche une bordure rouge autour du champ estimation pendant le temps prescrit
			 */
			display_guess_error() {
				this.error_border.is_active = true;
				setTimeout(
					() => this.error_border.is_active = false,
					this.error_border.display_time * 1000
				);
			},
		},
		computed: {
			/**
			 * Pointage du joueur pour cette ronde
			 *
			 * @return {number} pointage pour la ronde
			 */
			round_score() {
				// Rien de saisi pour l'instant
				if(this.guess === null || this.real_result === null) {
					return 0;
				}

				// Bon nombre de rondes gagnées
				if(this.guess === this.real_result) {
					return 20 + this.real_result * 10;
				}

				// Surestimation/sous-estimation
				return this.get_difference() * -10;
			},

			/**
			 * Détermine si le vrai résultat a été saisi ou non
			 *
			 * @return {boolean}
			 */
			no_result_entered() {
				return this.real_result === null;
			}
		},
		props: {
			is_even: {
				type: Boolean,
				default: false,
				required: false,
			},
			additional_classes: {
				type: String,
				default: null,
				required: false,
			},
			round_number: {
				type: Number,
				required: true,
			}
		},
	}
</script>