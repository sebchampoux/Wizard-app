<template>
	<div class="player-header" :class="[additional_classes]">
		<p class="player-header__name" v-if="name_confirmed">{{ player_name }}</p>
		<div class="player-header__form-wrapper" v-else>
			<input type="text" class="form-control player-header__input" :class="{'player-header__input--error': input_error.is_active}" v-model="name_input" placeholder="Nom">
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
				name_input: '',
				name_confirmed: false,

				input_error: {
					disp_time: 2, // en secondes
					is_active: false,
				}
			}
		},
		methods: {
			confirm_player_name() {
				if(this.name_input === null) {
					this.display_error_on_name_input();
					return;
				}

				this.name_confirmed = true;
				this.register_new_name_to_store();
			},

			display_error_on_name_input() {
				this.input_error.is_active = true;
				setTimeout(
					() => this.input_error.is_active = false,
					this.input_error.disp_time * 1000
				);
			},

			register_new_name_to_store() {
				this.$store.commit({
					type: 'set_player_name',
					player_index: this.player_index,
					new_player_name: this.name_input
				});
			}
		},
		computed: {
			/**
			 * @return {String}
			 */
			player_name() {
				return this.$store.getters.get_player_name(this.player_index);
			},

			/**
			 * @return {Number}
			 */
			player_score() {
				return this.$store.getters.get_player_total(this.player_index);
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
			}
		}
	}
</script>