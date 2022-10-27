<template>
<div class="pa-2">
    <v-row dense :justify="'center'">
        <v-col cols="12">
            <v-row no-gutters>
                <v-col cols="auto" class="mr-auto">
                    <div>
                        <span>메인 텍스트 입니다.메인 텍스트 입니다.메인 텍스트 입니다.메인 텍스트 입니다.</span>
                    </div>
                </v-col>
                <v-col cols="auto" class="">
                    <v-btn class="mr-2">
                        버튼
                    </v-btn>
                    <v-btn>
                        버튼
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <v-row dense>
                <v-col cols="12">
                    <Card></Card>
                </v-col>
                <v-col cols="12" md="4">
                    <Card></Card>
                </v-col>
                <v-col cols="12" md="4">
                    <Card></Card>
                </v-col>
                <v-col cols="12" md="4">
                    <Card></Card>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <Card></Card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import Card from './views/Card'
export default {
    components: { Card },
    data () {
        return {
        
        }
    }
}
</script>