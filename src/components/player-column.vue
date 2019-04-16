<template>
	<div class="player-column" :class="[additional_classes]">
		<player-header></player-header>
		<!--<player-round additional_classes="player-column__player-round"></player-round>-->
	</div>
</template>

<script>
	import PlayerHeader from "./player-header";
	import PlayerRound from "./player-round";

	export default {
		name: "player-column",
		components: {PlayerRound, PlayerHeader},
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