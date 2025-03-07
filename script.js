// Language translations
const translations = {
    en: {
        title: "Medicine Name Detection",
        description: "Illegible handwriting in medical prescriptions poses a safety risk and disrupts workflows. Patients can have confidence that the medications prescribed are precisely conveyed, reducing the risk of adverse effects due to misunderstandings or mistakes in dispensing. This study introduces accurately transcribe and validate handwritten text, reducing medication errors. The user-friendly interface empowers patients with comprehensive drug information and drug parameters, while robust language models enhance accuracy. The system offers a practical solution for safer prescriptions and streamlined pharmacy workflows. The project incorporates a patient-centric feature providing comprehensive drug information.",
        uploadButton: "Upload & Detect",
        extractedMedicine: "Extracted Medicine:",
        name: "Name:",
        composition: "Composition:",
        uses: "Uses:",
        sideEffects: "Side Effects:",
        manufacturer: "Manufacturer:",
        howToUse: "How to Use:",
        step1: "Step 1: Users can upload images of medical products using either their device's camera or by selecting files from their local storage. The supported image formats include JPG, PDF, and JPEG.",
        step2: "Step 2: After the image is submitted, the application processes it and displays information about the medical product across seven different parameters:",
        step3: "Step 3: The output displayed to the user can be translated into their preferred language. This translation is available in both audio and text formats, providing accessibility to users who may prefer auditory or visual communication.",
        parameters: [
            "Composition: Details about the ingredients or components of the product.",
            "Combination: Information regarding any combinations or formulations present in the product.",
            "Usage: Guidance on how the product should be used or administered.",
            "Side Effects: Potential adverse effects or reactions associated with the product.",
            "Antibiotic or Probiotic: Indicates whether the product contains antibiotics, probiotics, or both.",
            "Manufacturing: Details about the manufacturing process or company responsible for producing the product.",
            "Product Details: Additional information about the product, such as dosage, indications, or warnings."
        ]
    },
    ta: {
        title: "மருந்து பெயர் கண்டறிதல்",
        description: "மருத்துவ மருந்துச் சீட்டுகளில் தெளிவற்ற கையெழுத்து பாதுகாப்பு அபாயத்தை ஏற்படுத்துகிறது மற்றும் பணி ஓட்டத்தை சீர்குலைக்கிறது. நோயாளிகள் மருந்துகள் சரியாக வழங்கப்படுவதை நம்பலாம், தவறான புரிதல் அல்லது மருந்து வழங்குவதில் ஏற்படும் தவறுகள் காரணமாக ஏற்படும் பாதகமான விளைவுகளின் அபாயத்தை குறைக்கிறது. இந்த ஆய்வு கையெழுத்து உரையை துல்லியமாக பதிவு செய்து சரிபார்க்கிறது, மருந்து பிழைகளை குறைக்கிறது. பயனர் நட்பு இடைமுகம் நோயாளிகளுக்கு விரிவான மருந்து தகவல்கள் மற்றும் மருந்து அளவுருக்களை வழங்குகிறது, அதே நேரத்தில் வலுவான மொழி மாதிரிகள் துல்லியத்தை மேம்படுத்துகின்றன. இந்த அமைப்பு பாதுகாப்பான மருந்துச் சீட்டுகள் மற்றும் திறமையான மருந்தக பணி ஓட்டங்களுக்கு நடைமுறை தீர்வை வழங்குகிறது. இந்த திட்டம் நோயாளி மைய அம்சத்தை உள்ளடக்கியது, விரிவான மருந்து தகவல்களை வழங்குகிறது.",
        uploadButton: "பதிவேற்றம் & கண்டறிதல்",
        extractedMedicine: "பிரித்தெடுக்கப்பட்ட மருந்து:",
        name: "பெயர்:",
        composition: "கலவை:",
        uses: "பயன்கள்:",
        sideEffects: "பக்க விளைவுகள்:",
        manufacturer: "உற்பத்தியாளர்:",
        howToUse: "எப்படி பயன்படுத்துவது:",
        step1: "படி 1: பயனர்கள் தங்கள் சாதனத்தின் கேமராவைப் பயன்படுத்தி அல்லது தங்கள் உள்ளூர் சேமிப்பிலிருந்து கோப்புகளைத் தேர்ந்தெடுத்து மருத்துவ பொருட்களின் படங்களை பதிவேற்றம் செய்யலாம். ஆதரிக்கப்படும் பட வடிவங்கள் JPG, PDF மற்றும் JPEG ஆகும்.",
        step2: "படி 2: படம் சமர்ப்பிக்கப்பட்ட பிறகு, பயன்பாடு அதை செயலாக்கி ஏழு வெவ்வேறு அளவுருக்கள் மூலம் மருத்துவ பொருளைப் பற்றிய தகவல்களை காட்டுகிறது:",
        step3: "படி 3: பயனருக்கு காட்டப்படும் வெளியீடு அவர்களின் விருப்பப்படி மொழியில் மொழிபெயர்க்கப்படலாம். இந்த மொழிபெயர்ப்பு ஆடியோ மற்றும் உரை வடிவங்களில் கிடைக்கிறது, கேட்கும் அல்லது காட்சி தொடர்பை விரும்பும் பயனர்களுக்கு அணுகல்தன்மையை வழங்குகிறது.",
        parameters: [
            "கலவை: பொருளின் பொருட்கள் அல்லது கூறுகள் பற்றிய விவரங்கள்.",
            "கலவை: பொருளில் உள்ள கலவைகள் அல்லது சூத்திரங்கள் பற்றிய தகவல்கள்.",
            "பயன்பாடு: பொருள் எவ்வாறு பயன்படுத்தப்பட வேண்டும் அல்லது கொடுக்கப்பட வேண்டும் என்பதற்கான வழிகாட்டுதல்.",
            "பக்க விளைவுகள்: பொருளுடன் தொடர்புடைய சாத்தியமான பாதகமான விளைவுகள் அல்லது எதிர்வினைகள்.",
            "ஆன்டிபயாடிக் அல்லது புரோபயாடிக்: பொருளில் ஆன்டிபயாடிக்ஸ், புரோபயாடிக்ஸ் அல்லது இரண்டும் உள்ளதா என்பதை குறிக்கிறது.",
            "உற்பத்தி: பொருளை உற்பத்தி செய்யும் நிறுவனம் அல்லது செயல்முறை பற்றிய விவரங்கள்.",
            "பொருள் விவரங்கள்: மருந்தளவு, அறிகுறிகள் அல்லது எச்சரிக்கைகள் போன்ற பொருளைப் பற்றிய கூடுதல் தகவல்கள்."
        ]
    },
    hi: {
        title: "दवा का नाम पहचान",
        description: "चिकित्सा पर्चे में अस्पष्ट लिखावट सुरक्षा जोखिम पैदा करती है और कार्यप्रवाह को बाधित करती है। रोगियों को विश्वास हो सकता है कि निर्धारित दवाएं सटीक रूप से व्यक्त की जाती हैं, गलतफहमी या दवा वितरण में गलतियों के कारण प्रतिकूल प्रभावों के जोखिम को कम करती हैं। यह अध्ययन हस्तलिखित पाठ को सटीक रूप से प्रतिलिपि और सत्यापित करता है, दवा त्रुटियों को कम करता है। उपयोगकर्ता के अनुकूल इंटरफ़ेस रोगियों को व्यापक दवा जानकारी और दवा मापदंडों के साथ सशक्त बनाता है, जबकि मजबूत भाषा मॉडल सटीकता बढ़ाते हैं। सिस्टम सुरक्षित पर्चे और सुव्यवस्थित फार्मेसी कार्यप्रवाह के लिए एक व्यावहारिक समाधान प्रदान करता है। परियोजना में एक रोगी-केंद्रित सुविधा शामिल है जो व्यापक दवा जानकारी प्रदान करती है।",
        uploadButton: "अपलोड और पहचानें",
        extractedMedicine: "निकाली गई दवा:",
        name: "नाम:",
        composition: "संरचना:",
        uses: "उपयोग:",
        sideEffects: "दुष्प्रभाव:",
        manufacturer: "निर्माता:",
        howToUse: "कैसे उपयोग करें:",
        step1: "चरण 1: उपयोगकर्ता अपने डिवाइस के कैमरे का उपयोग करके या अपने स्थानीय भंडार से फ़ाइलें चुनकर चिकित्सा उत्पादों की छवियां अपलोड कर सकते हैं। समर्थित छवि प्रारूपों में JPG, PDF और JPEG शामिल हैं।",
        step2: "चरण 2: छवि जमा करने के बाद, एप्लिकेशन इसे संसाधित करता है और सात अलग-अलग मापदंडों के माध्यम से चिकित्सा उत्पाद के बारे में जानकारी प्रदर्शित करता है:",
        step3: "चरण 3: उपयोगकर्ता को दिखाई गई आउटपुट को उनकी पसंदीदा भाषा में अनुवादित किया जा सकता है। यह अनुवाद ऑडियो और पाठ दोनों प्रारूपों में उपलब्ध है, जो श्रवण या दृश्य संचार पसंद करने वाले उपयोगकर्ताओं के लिए पहुंच प्रदान करता है।",
        parameters: [
            "संरचना: उत्पाद के अवयवों या घटकों के बारे में विवरण।",
            "संयोजन: उत्पाद में मौजूद किसी भी संयोजन या सूत्रीकरण के बारे में जानकारी।",
            "उपयोग: उत्पाद का उपयोग या प्रशासन कैसे किया जाना चाहिए, इस पर मार्गदर्शन।",
            "दुष्प्रभाव: उत्पाद से जुड़े संभावित प्रतिकूल प्रभाव या प्रतिक्रियाएं।",
            "एंटीबायोटिक या प्रोबायोटिक: इंगित करता है कि क्या उत्पाद में एंटीबायोटिक्स, प्रोबायोटिक्स, या दोनों शामिल हैं।",
            "निर्माण: उत्पाद के निर्माण प्रक्रिया या उत्पादन के लिए जिम्मेदार कंपनी के बारे में विवरण।",
            "उत्पाद विवरण: खुराक, संकेत, या चेतावनी जैसे उत्पाद के बारे में अतिरिक्त जानकारी।"
        ]
    }
};

// Function to update the language
function updateLanguage(lang) {
    // Update all text content
    document.querySelector('h2').textContent = translations[lang].title;
    document.querySelector('.description p').textContent = translations[lang].description;
    document.querySelector('button').textContent = translations[lang].uploadButton;
    document.querySelector('#result h2').textContent = translations[lang].extractedMedicine;
    
    // Update medicine details labels
    document.querySelector('#medicineName').previousElementSibling.textContent = translations[lang].name;
    document.querySelector('#medicineComposition').previousElementSibling.textContent = translations[lang].composition;
    document.querySelector('#medicineUses').previousElementSibling.textContent = translations[lang].uses;
    document.querySelector('#medicineSideEffects').previousElementSibling.textContent = translations[lang].sideEffects;
    document.querySelector('#medicineManufacturer').previousElementSibling.textContent = translations[lang].manufacturer;
    
    // Update How to Use section
    document.querySelector('.how-to-use h3').textContent = translations[lang].howToUse;
    document.querySelector('.how-to-use p:nth-of-type(1)').textContent = translations[lang].step1;
    document.querySelector('.how-to-use p:nth-of-type(2)').textContent = translations[lang].step2;
    document.querySelector('.how-to-use p:nth-of-type(3)').textContent = translations[lang].step3;
    
    // Update parameters list
    const parametersList = document.querySelector('.how-to-use ol');
    parametersList.innerHTML = '';
    translations[lang].parameters.forEach(param => {
        const li = document.createElement('li');
        li.textContent = param;
        parametersList.appendChild(li);
    });
}

// Add event listener for language change
document.getElementById('languageSelect').addEventListener('change', function(e) {
    updateLanguage(e.target.value);
});

// Initialize with default language (English)
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage('en');
});

// Async function to handle image upload and API call
async function uploadImage() {
    const fileInput = document.getElementById("imageUpload");
    if (fileInput.files.length === 0) {
        alert("Please select an image first!");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = async function () {
        const base64Image = reader.result.split(",")[1]; // Extract base64 data
        try {
            const response = await fetch("https://4e29-34-170-27-56.ngrok-free.app/upload", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: base64Image })
            });

            const data = await response.json();
            console.log("Server Response:", data);

            if (data.message === "Success" && data.medicine) {
                document.getElementById("medicineName").innerText = data.medicine.medicine_name;
                document.getElementById("medicineComposition").innerText = data.medicine.details.Composition;
                document.getElementById("medicineUses").innerText = data.medicine.details.Uses;
                document.getElementById("medicineSideEffects").innerText = data.medicine.details.Side_effects;
                document.getElementById("medicineManufacturer").innerText = data.medicine.details.Manufacturer;
                
                const imgElement = document.getElementById("medicineImage");
                imgElement.src = data.medicine.details.Image_URL;
                imgElement.style.display = "block";
            } else {
                document.getElementById("medicineName").innerText = "No matching medicine found.";
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error uploading image. Please try again.");
        }
    };

    reader.readAsDataURL(file);
}