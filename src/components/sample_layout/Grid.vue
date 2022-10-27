<template>
<div class="pa-2">
    <div class="headline mb-5">제목입니다.</div>
    <!-- <v-divider class="mb-5"></v-divider> -->
    <v-row class="pa-5">
        <v-col cols="12" md="6" lg="2">
            <div class="white rounded" style="width:100%; height:100%; min-height:300px;"></div>
        </v-col>
        <v-col cols="12" md="6" lg="3">
            <div class="white rounded" style="width:100%; height:100%; min-height:300px;"></div>
        </v-col>
        <v-col cols="12" md="12" lg="7">
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
                    <Card style="height:300px;"></Card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <v-row :justify="'end'">
        <v-col cols="auto">
            <v-btn class="mr-2">
                버튼
            </v-btn>
            <v-btn>
                버튼
            </v-btn>
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