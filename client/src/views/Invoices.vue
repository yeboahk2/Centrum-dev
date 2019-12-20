<template>
    <v-container fluid>
        <v-app-bar flat class="secondary">
            <v-toolbar-title class="primary--text text--darken-3 font-weight-bold">Invoices</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field append-outer-icon="fa-search"></v-text-field>
            <!-- <v-btn flat outlined color="primary"><v-icon>fa-search</v-icon></v-btn> -->
        </v-app-bar>

        <hr/>

        <v-app-bar flat class="secondary">
            <v-btn class="mr-1"><v-icon>fa-trash</v-icon></v-btn>
            <v-btn class="mr-1"><v-icon>fa-download</v-icon></v-btn>
            <v-btn class="mr-1"><v-icon>fa-print</v-icon></v-btn>
            <v-btn class="mr-1"><v-icon>fa-tag</v-icon></v-btn>
        </v-app-bar>

        <v-container>
            <span v-for="item in invoices" v-bind:key="item.id" >
            <v-card :flat="item.selected ? false : true" class="mb-1 px-3 py-1">
                <v-row wrap>
                    <v-col md="1" class="text-center">
                        <v-checkbox dense hide-details v-model="item.selected" color="primary"></v-checkbox>
                    </v-col>
                    <v-col md="5">
                        <div class="caption grey--text">Number</div>
                        <div>{{item.id}}</div>
                    </v-col>
                    <v-col md="2">
                        <div class="caption grey--text">Total</div>
                        <div>{{item.total}}</div>
                    </v-col>
                    <v-col md="2">
                        <div class="caption grey--text">Date</div>
                        <div>{{item.date}}</div>
                    </v-col>
                    <v-col md="2">
                        <div class="caption grey--text">Status</div>
                        <div class="text-center accent--text pa-1 caption" :class="statusColor(item.status)" style="border-radius: 20px">{{item.status}}</div>
                    </v-col>
                </v-row>
            </v-card>
            </span>
        </v-container>
    </v-container>
</template>

<script>
import invoices from '../data/invoices'

export default {
    name: 'Invoices',

    data: function() {
        return {
            invoices
        }
    },

    methods: {
        statusColor: function(status) {
            if (status == "pending") {
                return "invoicePending"
            }
            else if(status == "complete") {
                return "invoiceComplete"
            }

            return ""
        }
    }
}
</script>

<style scoped>
</style>