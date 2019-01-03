<template>
	<div class="player-column" :class="[additional_classes]">
		<player-header></player-header>
		<player-round
				v-for="iteration in number_of_rounds"
				:key="iteration"
				:is_even="iteration % 2 === 0"
				:round_number="iteration"
				additional_classes="player-column__player-round"></player-round>
	</div>
</template>

<script>
	import PlayerHeader from "./player-header";
	import PlayerRound from "./player-round";

	export default {
		name: "player-column",
		components: {PlayerRound, PlayerHeader},

		props: {
			number_of_rounds: {
				type: Number,
				default: 10,
				required: true,
			},
			additional_classes: {
				type: String,
				default: null,
				required: false,
			}
		},

	}
</script>