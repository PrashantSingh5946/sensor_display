/**
 * Generates new fluctuating data based on the original dataset
 * @param {Object} originalData - The original static data object
 * @returns {Object} - New data object with fluctuated values
 */
export function generateFluctuatedData(originalData) {
  // Helper function to generate a fluctuated value
  const fluctuateValue = (baseValue, percent) => {
    const fluctuation = (Math.random() * percent * 2) - percent; // ±percent range
    return Math.max(0, baseValue + (baseValue * fluctuation / 100));
  };

  // Helper to get a slightly varied temperature
  const fluctuateTemp = (baseTemp) => {
    const tempValue = parseInt(baseTemp);
    const fluctuation = (Math.random() * 2) - 1; // ±1°C
    return `${Math.max(0, Math.round(tempValue + fluctuation))} C`;
  };

  // Clone the original data to avoid mutation
  const newData = JSON.parse(JSON.stringify(originalData));

  // CPU fluctuations
  if (newData.cpu) {
    newData.cpu.usage = Math.round(
      fluctuateValue(originalData.cpu.usage, originalData.cpu.fluctuationPercentage)
    );
    newData.cpu.temperature = fluctuateTemp(originalData.cpu.temperature);
    newData.cpu.clockSpeed = fluctuateValue(originalData.cpu.clockSpeed, originalData.cpu.fluctuationPercentage)
  }

  // RAM fluctuations
  if (newData.memory) {
    const fluctuatedUsed = fluctuateValue(originalData.memory.used, originalData.memory.fluctuationPercentage);
    newData.memory.used = Math.round(fluctuatedUsed);
    newData.memory.free = originalData.memory.total - newData.memory.used;
  }

  // GPU fluctuations
  if (newData.gpu) {
    newData.gpu.usage = Math.round(
      fluctuateValue(originalData.gpu.usage, originalData.gpu.fluctuationPercentage)
    );
    newData.gpu.clockSpeed = Math.round(
      fluctuateValue(originalData.gpu.clockSpeed, 5) // ±5% clock speed fluctuation
    );
    newData.gpu.temperature = Math.round(
      originalData.gpu.temperature + (Math.random() * 4 - 2) // ±2°C fluctuation
    );
    newData.gpu.fanspeed = Math.round(
      fluctuateValue(originalData.gpu.fanspeed, 8) // ±8% fan speed fluctuation (GPU fans often vary more)
    );
  }

  if(newData.fans){
    newData.fans.case = Math.round(fluctuateValue(originalData.fans.case, originalData.fans.fluctuationPercentage))
    newData.fans.cpu = Math.round(fluctuateValue(originalData.fans.cpu, originalData.fans.fluctuationPercentage))
    newData.fans.gpu = Math.round(fluctuateValue(originalData.fans.gpu, originalData.fans.fluctuationPercentage))
  }


  // FPS fluctuations (if needed)
  if (newData.fps) {
    newData.fps.current = Math.round(
      originalData.fps.current + (Math.random() * 10 - 5) // ±5 FPS fluctuation
    );
    // Keep within min/max bounds
    newData.fps.current = Math.max(
      originalData.fps.min,
      Math.min(originalData.fps.max, newData.fps.current)
    );
  }

  return newData;
}

// Usage example:
/*
import data from './data';
import { generateFluctuatedData } from './dataMutator';

// To get updated data every second:
setInterval(() => {
  const liveData = generateFluctuatedData(data);
  // Update your components with liveData
}, 1000);
*/