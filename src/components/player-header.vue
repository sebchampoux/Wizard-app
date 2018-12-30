<template>
	<div class="player-header">
		<p class="player-header__name" v-if="name_confirmed">{{ player_name }}</p>
		<div class="player-header__form-wrapper" v-else>
			<input type="text" class="form-control player-header__input" :class="{'player-header__input--error': input_error.is_active}" v-model="player_name" placeholder="Nom du joueur">
			<button type="button" class="btn btn-success player-header__confirm-btn" @click="confirm_player_name"><i class="icon-ok"></i></button>
		</div>
		<p class="player-header__score">0</p>
	</div>
</template>

<script>
	export default {
		name: "player-header",

		data() {
			return {
				player_name: null,
				name_confirmed: false,

				input_error: {
					disp_time: 2, // en secondes
					is_active: false,
				}
			}
		},
		methods: {
			confirm_player_name() {
				if(this.player_name === null) {
					this.input_error.is_active = true;
					setTimeout(
						() => this.input_error.is_active = false,
						this.input_error.disp_time * 1000
					);
					return;
				}
				this.name_confirmed = true;
			}
		},
	}
</script>