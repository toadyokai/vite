<script setup lang="ts">
import { Button, Input, Divider, Card } from 'ant-design-vue'
import dayjs from 'dayjs';
import { ref } from 'vue';
import _ from 'lodash'

const time = ref(dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss'))
const uuid = ref(_.uniqueId())

</script>

<template>
  <Input placeholder="input some word."/>
  <Divider></Divider>
  <Button>Test</Button>
  <Divider></Divider>
  <Card>{{ time }}</Card>
  <Divider></Divider>
  <Card>{{ uuid }}</Card>
</template>