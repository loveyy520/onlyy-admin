<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const pieChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(pieChartRef as Ref<HTMLDivElement>, {
  theme
});

setOptions(
  {
    tooltip: {
      trigger: "item"
    },
    legend: {
      icon: "circle",
      //@ts-expect-error
      right: true
    },
    series: [
      {
        name: "工作时长信息",
        type: "pie",
        top: "20%",
        radius: ["60%", "80%"],
        center: ["40%", "50%"],
        color: [
          "#64d8a3",
          "#ff9d4d",
          // "#5C9DF8",
          // "#f9d372",
          // "#ec7471",
          // "#73c0de",
          "#F9D372",
          "#EC7471",
          "#fc8452",
          "#9a60b4",
          "#ea7ccc"
        ],
        data: [
          { value: 400, name: "通勤时长" },
          { value: 1600, name: "下班时长" },
          { value: 7200, name: "上班/加班时长" }
        ],
        label: {
          show: false
        },
        itemStyle: {
          borderColor: "#fff"
        }
        // emphasis: {
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowOffsetX: 0,
        //     shadowColor: "rgba(0, 0, 0, 0.5)"
        //   }
        // }
      }
    ]
  },
  {
    name: "click",
    callback: params => {
      console.log("click", params);
    }
  },
  // 点击空白处
  {
    type: "zrender",
    name: "click",
    callback: params => {
      console.log("点击空白处", params);
    }
  }
);

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="pieChartRef" style="width: 100%; height: 35vh" />
</template>
