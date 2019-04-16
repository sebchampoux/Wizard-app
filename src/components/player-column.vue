<template>
	<div class="player-column" :class="[additional_classes]">
		<player-header
				:player_index="player_index">
		</player-header>
		<player-round
				v-for="round in number_of_rounds"
				:key="round - 1"
				:round_index="round - 1"
				:is_even="round % 2 == 0"
				:player_index="player_index"
				additional_classes="player-column__player-round">
		</player-round>
	</div>
</template>

<script>
	import PlayerHeader from "./player-header";
	import PlayerRound from "./player-round";
	import {mapGetters} from 'vuex';

	export default {
		name: "player-column",
		components: {PlayerRound, PlayerHeader},
		computed: {
			...mapGetters([
				'number_of_rounds'
			])
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
			}
		},
	}
</script>