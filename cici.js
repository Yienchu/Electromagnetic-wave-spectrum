const regionData = {
  radio: {
    title: 'Radio Waves',
    description: 'Radio waves are a type of electromagnetic wave with the longest wavelengths and lowest frequencies in the electromagnetic spectrum. They range from 3 Hz to 300 GHz in frequency and can have wavelengths from kilometers to millimeters. ',
    examples: [
     { name:'FM radio broadcasting', description: 'FM radio broadcasting uses frequency modulation to encode audio signals on a carrier wave. This enables clear sound quality over a wide range of frequencies.'},
      { name: 'TV broadcasts', description: 'Television broadcasts transmit visual and audio information over long distances using specific radio frequencies.' },
      { name: 'Cellular communication', description: 'Cellular networks use radio waves to facilitate communication between mobile phones and towers.' }
    ],
    image: 'https://www.innovationnewsnetwork.com/wp-content/uploads/2022/12/%C2%A9-iStockalengo-165838058-696x392.jpg',
    experiment: 'radioExperiment',
    videoUrl: 'https://youtu.be/Ldnh0XlMVc0'
  },
  microwave: {
    title: 'Microwaves',
    description: 'Microwaves are electromagnetic waves with wavelengths between 1 millimeter and 30 centimeters and frequencies ranging from 300 MHz to 300 GHz. Microwaves can travel long distances and are absorbed by water, making them effective for heating food. They carry more energy than radio waves but less than infrared waves.',
    examples: [ 
      { name: 'Microwave ovens', 
        description: 'Microwave ovens use microwaves to heat food.' },
      { name: 'Radar systems',
         description: 'A microwave radar system uses microwaves to detect objects and measure their distance, speed, and direction. The system sends out microwave signals that bounce off objects and return, with the time it takes for the signals to return providing information about the object.' },
      { name: 'Wi-Fi', 
        description: 'Wi-Fi uses microwave frequencies (typically 2.4 GHz and 5 GHz) to transmit data wirelessly over short distances. It enables devices like smartphones and laptops to connect to the internet without physical cables by sending and receiving data through microwave signals.' }
    ],
   
    image: 'https://eduinput.com/wp-content/webpc-passthru.php?src=https://eduinput.com/wp-content/uploads/2023/09/image-of-Examples-of-Microwave.jpg&nocache=1',
    experiment: 'microwaveExperiment',
    videoUrl:'https://youtu.be/YgQQb1BVnu8'
  },
  infrared: {
    title: 'Infrared Waves',
    description: 'Infrared (IR) is a type of electromagnetic wave with wavelengths between 700 nanometers and 1 millimeter, corresponding to frequencies between 300 GHz and 430 THz. It is used for heating, remote sensing, night vision, and communication. Infrared radiation is absorbed by objects, which then emit heat, making it useful for thermal imaging. It has more energy than microwaves but less than visible light.',
    examples: [
    { name:'Thermal camera', description: 'A thermal camera detects infrared radiation emitted by objects and converts it into an image, allowing the visualization of heat patterns. It is used for surveillance, building inspections, and medical applications.'},
      { name: 'Remote control', description: 'A remote control uses infrared light to send signals to devices like TVs or air conditioners. It sends pulses of infrared light, which are detected by sensors in the device to perform commands.' },
      { name: 'Infrared astronomy', description: 'Infrared astronomy involves observing celestial objects in the infrared spectrum. It helps astronomers study objects that are too cool or obscured by dust to be seen in visible light, such as forming stars or distant galaxies.' }
    ],
    image: 'https://study.com/cimages/multimages/16/human-infrared.jpg',
    experiment: 'infraredExperiment',
      videoUrl:'https://youtu.be/PtWFCzDpveQ'
  },
  visible: {
    title: 'Visible Light',
    description: 'Visible light is the portion of the electromagnetic spectrum that can be detected by the human eye, with wavelengths ranging from about 400 to 700 nanometers. It includes all the colors of the rainbow, from violet (shorter wavelengths) to red (longer wavelengths). Visible light is used for seeing, photography, and is essential for plant photosynthesis. It carries more energy than infrared light but less than ultraviolet light..',
    examples: [
    { name:'Sunlight', description: 'Sunlight is the natural light emitted by the Sun, consisting of a broad spectrum of electromagnetic radiation, including visible light, ultraviolet (UV), and infrared (IR) radiation. It is essential for life on Earth, providing energy for photosynthesis and regulating the climate.'},
      { name: 'Lasers', description: 'A laser (Light Amplification by Stimulated Emission of Radiation) produces concentrated beams of light with a single wavelength (monochromatic) that are coherent and directional. Lasers are used in various applications, including medicine, communications, and entertainment.' },
      { name: 'LED lights', description: 'Light Emitting Diodes (LEDs) are energy-efficient light sources that emit light when an electric current passes through them. They produce visible light and are widely used in displays, lighting, and indicators due to their low energy consumption and long lifespan.' }
  ],
    image: 'https://webbtelescope.org/files/live/sites/webb/files/home/resource-gallery/articles/_images/Spectroscopy/Article2/Prism.jpg?t=tn2400',
    experiment: 'visibleExperiment',
      videoUrl:'https://youtu.be/q_CxKQC-zpg'
  },
  ultraviolet: {
    title: 'Ultraviolet Waves',
    description: 'Ultraviolet (UV) waves are electromagnetic waves with wavelengths ranging from about 10 to 400 nanometers, just shorter than visible light. They have higher frequencies and energy than visible light. UV waves are divided into three types: UVA, UVB, and UVC, with UVC being the most dangerous.',
    examples: [
      { name:'UV sterilizers', description: 'UV sterilizers use ultraviolet (UV) light, typically UV-C, to kill or inactivate harmful microorganisms like bacteria, viruses, and fungi. They are used in water purification, air sterilization, and surface disinfection.'},
      { name: 'Black lights', description: 'Blacklights emit ultraviolet (UV-A) light, which is invisible to the human eye but causes certain materials to fluoresce, appearing to glow in the dark. Theyre commonly used in detecting counterfeit currency, in parties, and for certain scientific applications.' },
      { name: 'Sunburns', description: 'Sunburns occur when the skin is overexposed to ultraviolet (UV) radiation, particularly UV-B. This leads to skin damage, redness, pain, and peeling. Over time, repeated sunburns can increase the risk of skin cancer.' }
    ],
    image: 'https://www.pranaair.com/wp-content/uploads/2024/03/Thumbnail.png',
    experiment: 'ultravioletExperiment',
      videoUrl:'https://youtu.be/q_CxKQC-zpg'
  },
  xray: {
    title: 'X-rays',
    description: 'X-rays are a form of electromagnetic radiation with wavelengths ranging from about 0.01 to 10 nanometers, shorter than ultraviolet light but longer than gamma rays. They have high energy and can penetrate many materials, making them useful in medical imaging. However, excessive exposure to X-rays can damage tissues and increase the risk of cancer.',
    examples: [
    { name:'Medical X-rays', description: 'Medical X-rays use X-ray radiation to create images of the inside of the body, helping diagnose conditions like bone fractures, infections, or tumors. The X-rays pass through the body, and a detector captures the varying levels of absorption to form an image.'},
      { name: 'Airport security', description: 'X-rays are used in airport security scanners to examine luggage and cargo. The X-ray radiation passes through objects, and the varying absorption levels create detailed images, helping to detect prohibited items like weapons or explosives.' },
      { name: 'Astronomy', description: 'X-ray telescopes are used to observe high-energy phenomena in space, such as black holes, neutron stars, and supernovae. X-rays from these objects provide insights into their temperature, composition, and behavior, which is not visible with optical telescopes.' }
  ],
    image: 'https://cdn1.byjus.com/wp-content/uploads/2023/03/X-Rays-1.png',
    experiment: 'xrayExperiment',
      videoUrl:'https://youtu.be/dBFGjdgbpno'
  },
  gamma: {
    title: 'Gamma Rays',
    description: 'Gamma rays are the highest-energy form of electromagnetic radiation, with wavelengths shorter than 0.01 nanometers and frequencies above 10 exahertz (EHz). Gamma rays can penetrate most materials, making them useful for medical treatments (like cancer radiation therapy) and industrial applications. However, they are highly dangerous due to their ability to damage cells and DNA, potentially leading to cancer.',
    examples: [
      { name:'Cancer treatment(radiotherapy)', description: 'Radiotherapy uses high-energy gamma rays to treat cancer by targeting and destroying cancerous cells. The gamma rays damage the DNA of the tumor cells, inhibiting their ability to grow and divide, ultimately leading to their death.'},
      { name: 'Gamma-ray astronomy', description: 'Gamma-ray astronomy involves observing gamma rays from astronomical sources like black holes, neutron stars, and supernovae. These high-energy emissions provide valuable information about the most extreme and energetic processes in the universe.' },
      { name: 'Nuclear reactions', description: 'Nuclear reactions, such as fission and fusion, release large amounts of energy, often in the form of gamma rays. These reactions are used in nuclear power plants, in the production of nuclear weapons, and in processes like radioactive decay, which naturally emits gamma radiation.' }
    ],
    image: 'https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A394ecfd7c37eec9f6092d1b9428ca10a2345aeecbde059de0930eb09%2BIMAGE_TINY%2BIMAGE_TINY.1',
    experiment: 'gammaExperiment',
      videoUrl:'https://youtu.be/dBFGjdgbpno'
  }
};

function toggleRealWorldExamples() {
  const examplesSection = document.getElementById('real-world-examples');
  examplesSection.classList.toggle('hidden');
}

// Add search functionality for examples
document.getElementById('example-search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const examples = document.querySelectorAll('.example-item');
  examples.forEach(example => {
    if (example.textContent.toLowerCase().includes(query)) {
      example.style.display = 'list-item';
    } else {
      example.style.display = 'none';
    }
  });
});

// Show more details for each examplex  
function showDetails(example) {
  console.log('Example clicked:', example);
  if (!example || typeof example !== 'object') {
    console.error('Invalid example object:', example); // Debugging log
    return;
  }

  const details = document.getElementById('example-details');
  const titleElement = document.getElementById('example-title');
  const descriptionElement = document.getElementById('example-description');
  
  titleElement.textContent = example.name;
  descriptionElement.textContent = example.description;
  
  details.classList.remove('hidden');
}

// Close the details pop-up
function closeDetails() {
  const details = document.getElementById('example-details');
  details.classList.add('hidden');
}


// Update region examples with clickable functionality
function updateRegionContent(region) {
  const regionInfo = regionData[region];
  document.getElementById('region-title').textContent = regionInfo.title;
  document.getElementById('region-description').textContent = regionInfo.description;

  const examplesList = document.getElementById('examples');
  examplesList.innerHTML = '';

  regionInfo.examples.forEach(example => {
    console.log('Example:', example);
    const li = document.createElement('li');
    li.textContent = typeof example === 'object' ? example.name : example; // Handle both object and string
  li.classList.add('example-item');
  if (typeof example === 'object') {
    console.log('Adding click events for:', example.name);
    li.onclick = () => toggleDescription(li, example); // Only attach click event for objects
  } else {
    console.warn('This is not an object:', example);
  }

  examplesList.appendChild(li);
  });
}
function toggleDescription(listItem, example) {
  // Check if description is already displayed
  const existingDescription = listItem.querySelector('.example-description');
  if (existingDescription) {
    // Remove the description if it exists
    existingDescription.remove();
  } else {
    // Add a new description if it doesn't exist
    const description = document.createElement('p');
    description.textContent = example.description; // Set the description text
    description.classList.add('example-description'); // Add styling class
    listItem.appendChild(description); // Append description to the list item
  }
}

function changeRegion(region) {
  const lessonContent = document.getElementById('lesson-content');
  const realWorldExamples = document.getElementById('real-world-examples');
  lessonContent.classList.add('fade-out');
  realWorldExamples.classList.add('fade-out');

  setTimeout(() => {
    const regionInfo = regionData[region];
  document.getElementById('region-description').textContent = regionInfo.description;
  document.getElementById('region-title').textContent = regionInfo.title;
 



    const examplesList = document.getElementById('examples');
    examplesList.innerHTML = '';
    regionInfo.examples.forEach(example => {
      const li = document.createElement('li');
      li.textContent = typeof example === 'object' ? example.name : example; // Handle both object and string
      li.classList.add('example-item');
      if (typeof example === 'object') {
        li.onclick = () => showDetails(example); // Add click functionality for objects
      }
      examplesList.appendChild(li);
    });

   updateRegionContent(region);
    // Update image
    console.log(`Region Info`, regionInfo);
    const imageElement = document.getElementById('region-image');
    if (regionInfo.image) {
      imageElement.src = regionInfo.image; // Set the image source
      imageElement.alt = `${regionInfo.title} Image`; // Optional: Improve accessibility
    } else {
      console.warn(`No image found for region: ${region}`);
      imageElement.src = ''; // Clear image if not available
    }

    const experimentButton = document.getElementById('virtual-experiment-button');
    if (regionInfo.experiment) {
      experimentButton.onclick = window[regionInfo.experiment];
    } else {
      experimentButton.onclick = null;
    }
    if (regionInfo.videoUrl) {
      experimentButton.onclick = () => window.open(regionInfo.videoUrl, '_blank');
    } else {
      experimentButton.onclick = null;
    }
    
    

    lessonContent.classList.remove('fade-out');
    realWorldExamples.classList.remove('fade-out');
    lessonContent.classList.add('fade-in');
    realWorldExamples.classList.add('fade-in');
  }, 500);
}



function radioExperiment() {
  alert('Simulating Radio Wave Transmission...');
}

function microwaveExperiment() {
  alert('Simulating Microwave Transmission...');
}

function infraredExperiment() {
  alert('Simulating Infrared Heat Radiation...');
}

function visibleExperiment() {
  alert('Simulating Visible Light Interaction...');
}

function ultravioletExperiment() {
  alert('Simulating UV Sterilization...');
}

function xrayExperiment() {
  alert('Simulating X-ray Imaging...');
}

function gammaExperiment() {
  alert('Simulating Gamma Ray Emission...');
}
