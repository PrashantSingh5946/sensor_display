const data = {
    cpu: {
        title: "5600X",
        usage: 30,
        temperature: "45 C",
        clockSpeed: 4100,
        frequency: 2.5,
        cores: 8,
        logo: "ryzen.svg",
        fanspeed: "1200rpm",
        fluctuationPercentage: 2.5,  // ±2.5% usage fluctuation
        fluctuationInterval: 1000,   // fluctuates every 1 second
    },
    memory: {
        title: "RAM",
        total: 16000,
        used: 8000,
        free: 8000,
        speed: 2400,
        fluctuationPercentage: 1.8,  // ±1.8% usage fluctuation
        fluctuationInterval: 1500,   // fluctuates every 1.5 seconds
    },
    gpu: {
        title: "RTX 4060",
        model: "NVIDIA GeForce RTX 4060",
        memory: 10240,
        temperature: 60,
        usage: 70,
        clockSpeed: 1800,
        fanspeed: 1500,
        fluctuationPercentage: 10.2,  // ±3.2% usage fluctuation
        fluctuationInterval: 800,     // fluctuates every 0.8 seconds
    },
    fps: {
        title: "FPS",
        current: 60,
        average: 55,
        min: 30,
        max: 60,
    },
    network: {
        title: "Network",
        download: 100,
        upload: 50,
        latency: 20,
        packets: {
            sent: 1000,
            received: 1200,
        },
    },
    motherboard: {
        title: "ROG",
        model: "ASUS ROG Strix",
        chipset: "Ryzen 5000 Series",
        biosVersion: "1401",
        temperature: 35
    },
    fans:{
        case: 1500,
        cpu: 2100,
        gpu:500,
        fluctuationPercentage: 2.5,  // ±2.5% usage fluctuation
        fluctuationInterval: 1000, 
    }
};

export default data;