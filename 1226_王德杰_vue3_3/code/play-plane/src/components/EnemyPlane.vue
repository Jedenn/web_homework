<template>
  <container>
    <sprite :texture="enemyImg"></sprite>
  </container>
</template>

<script>
import { reactive, onMounted, onUnmounted } from "vue";
import enemyImg from "../assets/enemy.png";
import { game } from "../game";
export default {
  setup() {
    return {
      enemyImg,
    };
  },
};

export function useEnemyPlane() {
  const width = 398;
  const height = 207;
  const enemyPlanes = reactive([
    {
      x: 55,
      y: 55,
      width,
      height,
    },
    // {
    //   x: 90,
    //   y: 120,
    //   width,
    //   height,
    // },
  ]);

  // todo 1. 自动创建敌军
  // eslint-disable-next-line no-unused-vars
  function autoGeneratePlane(){
    const timeInterval = 1000;
    const planGenerator = ()=>{
      enemyPlanes.push({
        x: 30,
        y:30,
        width,
        height,
      })
    }

    onMounted(()=>{
     setInterval(planGenerator, timeInterval);
    })

    onUnmounted(()=>{
      clearInterval(planGenerator);
    })
  }
  // eslint-disable-next-line no-unused-vars
  // todo 2:当敌军飞机移出屏幕时，从数据结构中移除
  function move() {
    const speed = 5;
    const handleTicker = () => {
      enemyPlanes.forEach((enemy, index) => {
        enemy.y += speed;
        if (enemy.y >= 1280) {
          enemyPlanes.splice(index, 1);
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  }

  move();
  autoGeneratePlane();
  return {
    enemyPlanes,
  };
}
</script>
