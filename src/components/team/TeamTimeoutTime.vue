<template>
    <EditableLabelDuration
            :edit-mode="editMode"
            :value="team.timeoutTimeLeft"
            :callback="updateTimeoutTimeLeft"/>
</template>

<script>
    import EditableLabelDuration from "../common/EditableLabelDuration";

    export default {
        name: "TeamTimeoutTime",
        components: {EditableLabelDuration},
        props: {
            teamColor: String,
            editMode: Object,
        },
        methods: {
            updateTimeoutTimeLeft: function (v) {
                this.$socket.sendObj({
                    'modify': {
                        'forTeam': this.teamColor,
                        'timeoutTimeLeft': v
                    }
                })
            },
        },
        computed: {
            team() {
                return this.$store.state.refBoxState.teamState[this.teamColor]
            },
        }
    }
</script>

<style scoped>

</style>
