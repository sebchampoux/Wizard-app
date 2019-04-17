<template>
	<div class="player-header" :class="[additional_classes]">
		<p class="player-header__name" v-if="name_confirmed">{{ player_name }}</p>
		<div class="player-header__form-wrapper" v-else>
			<input type="text" class="form-control player-header__input" :class="{'player-header__input--error': input_error.is_active}" v-model="player_name" placeholder="Nom">
			<button type="button" class="btn btn-success btn-sm player-header__confirm-btn" @click="confirm_player_name"><i class="icon-ok"></i></button>
		</div>
		<p class="player-header__score">{{ player_score }}</p>
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
					this.display_error_on_name_input();
					return;
				}

				this.name_confirmed = true;
			},

			display_error_on_name_input() {
				this.input_error.is_active = true;
				setTimeout(
					() => this.input_error.is_active = false,
					this.input_error.disp_time * 1000
				);
			}
		},
		props: {
			player_index: {
				type: Number,
				required: true
			},
			additional_classes: {
				type: String,
				required: false,
				default: null,
			},
			player_score: {
				type: Number,
				required: true,
				default: 0
			}
		}
	}
</script>