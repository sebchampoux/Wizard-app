<template>
	<div class="app-frame">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<player-header></player-header>
					<player-round></player-round>
					<player-round :is_even="true"></player-round>
				</div>
				<div class="col-md-3">
					<player-header></player-header>
					<player-round></player-round>
					<player-round :is_even="true"></player-round>
				</div>
				<div class="col-md-3">
					<player-header></player-header>
					<player-round></player-round>
					<player-round :is_even="true"></player-round>
				</div>
				<div class="col-md-3">
					<player-header></player-header>
					<player-round></player-round>
					<player-round :is_even="true"></player-round>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PlayerHeader from "./components/player-header";
	import PlayerRound from "./components/player-round";

	export default {
		name: 'App',
		components: {PlayerHeader, PlayerRound}
	}
</script>

<style lang="scss">
	@import "assets/fonts/fontello/css/wizard.css";
	@import "assets/scss/main";
</style>