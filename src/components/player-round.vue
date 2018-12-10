<template>
	<div class="player-round" :class="{'player-round--lighter-bg': is_even}">
		<div class="player-round__score-wrapper">
			<h1 class="player-round__score">{{ round_score }}</h1>
		</div>
		<div class="player-round__inputs-wrapper">
			<input type="number" class="form-control player-round__input" placeholder="Estimation" v-model="guess">
			<input type="number" class="form-control player-round__input" placeholder="Résultat" v-model="real_result">
		</div>
	</div>
</template>

<script>
	export default {
		name: "player-round",
		data() {
			return {
				guess: null,
				real_result: null
			}
		},
		methods: {
			/**
			 * Calcule la différence entre le nombre de mains estimé et celui remporté
			 * @return {number} différence entre estimation et résultat final
			 */
			get_difference() {
				return Math.abs(this.guess - this.real_result);
			}
		},
		computed: {
			/**
			 * Pointage du joueur pour cette ronde
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
			}
		},
		props: {
			is_even: {
				type: Boolean,
				default: false,
				required: false
			},
		},
	}
</script>