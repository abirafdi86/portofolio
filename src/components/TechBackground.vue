<template>
  <div class="tech-background">
    <!-- Circuit Board SVG -->
    <svg class="circuit-container" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path class="circuit-line" d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100" />
      <path class="circuit-line" d="M0,200 Q100,150 200,200 T400,200" />
      <path class="circuit-line" d="M50,0 Q100,50 50,100 T50,200 T50,300" />
      <path class="circuit-line" d="M150,0 Q200,50 150,100 T150,200 T150,300" />
      <path class="circuit-line" d="M250,0 Q300,50 250,100 T250,200 T250,300" />
      <path class="circuit-line" d="M350,0 Q400,50 350,100 T350,200 T350,300" />

      <circle class="node pulse" cx="50" cy="100" r="3" style="animation-delay: 0s" />
      <circle class="node pulse" cx="150" cy="100" r="3" style="animation-delay: 1s" />
      <circle class="node pulse" cx="250" cy="100" r="3" style="animation-delay: 2s" />
      <circle class="node pulse" cx="350" cy="100" r="3" style="animation-delay: 0.5s" />

      <circle class="node pulse" cx="50" cy="200" r="3" style="animation-delay: 1.5s" />
      <circle class="node pulse" cx="150" cy="200" r="3" style="animation-delay: 2.5s" />
      <circle class="node pulse" cx="250" cy="200" r="3" style="animation-delay: 0.8s" />
      <circle class="node pulse" cx="350" cy="200" r="3" style="animation-delay: 1.8s" />

      <circle class="roaming-dot" cx="100" cy="150" r="5" style="animation-delay: 0s" />
      <circle class="roaming-dot" cx="200" cy="250" r="5" style="animation-delay: 5s" />
      <circle class="roaming-dot" cx="300" cy="100" r="5" style="animation-delay: 10s" />
    </svg>

    <!-- Binary Rain Effect -->
    <div class="binary-rain" id="binaryRain"></div>

    <!-- Code Snippets Floating -->
    <div class="code-block" style="top: 10%; left: 5%; animation-delay: 0s">
      function createComponent() {
      return {
      data() {
      return {
      loading: false,
      items: []
      }
      },
      mounted() {
      this.fetchData();
      },
      methods: {
      async fetchData() {
      this.loading = true;
      try {
      const response = await api.get('/endpoint');
      this.items = response.data;
      } finally {
      this.loading = false;
      }
      }
      }
      }
      }
    </div>

    <div class="code-block" style="top: 40%; left: 70%; animation-delay: 5s">
      const optimizePerformance = (array) => {
      return array
      .filter(item => item.active)
      .map(item => ({
      id: item.id,
      value: item.value * 2
      }))
      .sort((a, b) => a.value - b.value);
      };
    </div>

    <div class="code-block" style="top: 70%; left: 15%; animation-delay: 10s">
      class DataStructure {
      constructor() {
      this.values = new Map();
      }

      add(key, value) {
      this.values.set(key, value);
      return this;
      }

      get(key) {
      return this.values.has(key)
      ? this.values.get(key)
      : null;
      }
      }
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechBackground',
  mounted() {
    this.initTechBackground();
  },
  methods: {
    initTechBackground() {
      try {
        console.log('Initializing tech background');
        // Create binary rain effect
        const binaryRain = document.getElementById('binaryRain');
        if (!binaryRain) {
          console.error('Binary rain element not found');
          return;
        }

        const width = window.innerWidth;

        // Create columns for binary rain
        for (let i = 0; i < width / 20; i++) {
          const column = document.createElement('div');
          column.className = 'binary-column';
          column.style.left = (i * 20) + 'px';
          column.style.animationDuration = (Math.random() * 10 + 5) + 's';
          column.style.animationDelay = (Math.random() * 5) + 's';

          // Add binary digits
          for (let j = 0; j < 20; j++) {
            const digit = document.createElement('div');
            digit.textContent = Math.round(Math.random());
            digit.style.opacity = Math.random();
            column.appendChild(digit);
          }

          binaryRain.appendChild(column);
        }

        // Create more circuit paths dynamically
        const svg = document.querySelector('.circuit-container');
        if (!svg) {
          console.error('SVG container not found');
          return;
        }

        for (let i = 0; i < 5; i++) {
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('class', 'circuit-line');

          // Random path
          const startX = Math.random() * width;
          const startY = Math.random() * window.innerHeight;
          const controlX1 = startX + (Math.random() * 100 - 50);
          const controlY1 = startY + (Math.random() * 100 - 50);
          const endX = startX + (Math.random() * 200 - 100);
          const endY = startY + (Math.random() * 200 - 100);

          path.setAttribute('d', `M${startX},${startY} Q${controlX1},${controlY1} ${endX},${endY}`);
          svg.appendChild(path);

          // Add nodes at end points
          const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          node.setAttribute('class', 'node pulse');
          node.setAttribute('cx', endX);
          node.setAttribute('cy', endY);
          node.setAttribute('r', 3);
          node.style.animationDelay = (Math.random() * 3) + 's';
          svg.appendChild(node);
        }

        // Add more randomly positioned code blocks
        const codeSnippets = [
          `import React, { useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {loading ? <p>Loading...</p> : 
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      }
    </div>
  );
}`,
          `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && 
         rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}`
        ];

        const techBg = document.querySelector('.tech-background');
        if (!techBg) {
          console.error('Tech background element not found');
          return;
        }

        for (let i = 0; i < 3; i++) {
          const codeBlock = document.createElement('div');
          codeBlock.className = 'code-block';
          codeBlock.style.top = (Math.random() * 60 + 20) + '%';
          codeBlock.style.left = (Math.random() * 60 + 20) + '%';
          codeBlock.style.animationDelay = (Math.random() * 15) + 's';
          codeBlock.textContent = codeSnippets[i % codeSnippets.length];
          techBg.appendChild(codeBlock);
        }

        console.log('Tech background initialized successfully');
      } catch (error) {
        console.error('Error initializing tech background:', error);
      }
    }
  }
}
</script>

<style>
.tech-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.25;
  overflow: hidden;
  pointer-events: none;
}

.circuit-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.circuit-line {
  stroke: #64ffda;
  stroke-width: 1;
  fill: none;
}

.node {
  fill: #64ffda;
  opacity: 0;
}

.pulse {
  animation: pulse 3s infinite;
}

.roaming-dot {
  fill: #64ffda;
  animation: roam 20s infinite linear;
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes roam {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(100px, 150px);
  }

  50% {
    transform: translate(200px, 50px);
  }

  75% {
    transform: translate(100px, 250px);
  }

  100% {
    transform: translate(0, 0);
  }
}

.binary-rain {
  position: absolute;
  color: #64ffda;
  font-family: monospace;
  font-size: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.binary-column {
  position: absolute;
  top: -100px;
  width: 20px;
  animation-name: rain;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes rain {
  0% {
    transform: translateY(-100px);
  }

  100% {
    transform: translateY(100vh);
  }
}

.code-block {
  position: absolute;
  font-family: monospace;
  color: rgba(100, 255, 218, 0.3);
  font-size: 10px;
  line-height: 1.2;
  white-space: pre;
  opacity: 0;
  animation: fadeInOut 20s infinite;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0.3;
  }

  90% {
    opacity: 0.3;
  }

  100% {
    opacity: 0;
  }
}
</style>