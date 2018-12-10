<template>
	<div class="app-frame">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<player-round></player-round>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PlayerRound from "./components/player-round";

	export default {
		name: 'App',
		components: {PlayerRound}
	}
</script>

<style lang="scss">@import "assets/scss/main";</style>