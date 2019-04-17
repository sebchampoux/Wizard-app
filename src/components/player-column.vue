<template>
	<div class="player-column" :class="[additional_classes]">
		<player-header
				:player_score="player_score"
				:player_index="player_index">
		</player-header>
		<player-round
				v-for="round in number_of_rounds"
				:key="round - 1"
				:round_index="round - 1"
				:is_even="round % 2 == 0"
				:player_index="player_index"
				@score-updated="update_score_for_round((round - 1), $event)"
				additional_classes="player-column__player-round">
		</player-round>
	</div>
</template>

<script>
	import PlayerHeader from "./player-header";
	import PlayerRound from "./player-round";

	export default {
		name: "player-column",
		components: {PlayerRound, PlayerHeader},
		data() {
			return {
				score_per_round: []
			}
		},
		methods: {
			update_score_for_round(index, updated_score) {
				this.score_per_round.splice(index, 1, updated_score);
			}
		},
		computed: {
			/**
			 * @return {Number}
			 */
			player_score() {
				return this.score_per_round.reduce((a, b) => a + b, 0);
			},
		},
		props: {
			player_index: {
				type: Number,
				default: 0,
				required: true
			},
			additional_classes: {
				type: String,
				default: null,
				required: false,
			},
			number_of_rounds: {
				type: Number,
				default: 20,
				required: true
			}
		},
	}
</script>