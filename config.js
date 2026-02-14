// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Vợ iuu",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Happy anni 4 năm rưỡi tình yêu của đời tuiii 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Vợ chán tồng chưa hiccc",                                    // First interaction
            yesBtn: "Rồi",                                             // Text for "Yes" button
            noBtn: "Chưa",                                               // Text for "No" button
            secretAnswer: "Không bao giờ chánnnn ❤️"           // Secret hover message
        },
        second: {
            text: "Vợ yêu tồng nhìu o zạaaa?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Hê chắc lúc vợ đọc bức thư và tồng vt vợ sẽ bất ngờ vì thấy tại sao tồng nại nhắc nhiều chuyện tiêu cực lắm nhể hic nma tồng cóa cái này mún nói với vợ nè vợ nghe ooo?", // The big question!
            yesBtn: "Cóaaa",                                             // Text for "Yes" button
            noBtn: "o thèmm"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Hehe tạm đủ òiiiii 🥰🚀💝",  // Shows when they go past 5000%
        high: "Vẫn Íttttt",              // Shows when they go past 1000%
        normal: "Ít zạaaa"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Tồng cảm ơn vợ gấc nhiều vì suốt quãng thời gian qua đã luôn bên cạnh cùng a trải qua rấc nhiều dấu mốc quan trọng trong cuộc đời a vui có buồn cũng có. Để rồi a nhận ra 1 điều là thật sự những lúc khó khăn tồng có thể vượt qua được hay những lúc vui vẻ niềm vui ấy được tăng lên tất cả đều là nhờ có vợ ấy. Ngay cả những lúc tồng vô định nhất thì kiểu a cũng bt vì vợ để anh có thể tiếp tục cố gắng phát triển hơn ấy. Anh bt bọn mình có rất nhiều sóng gió và không phải là yêu đương yên ổn gì cả những đến cuối cùng sau tất cả những chuyện đấy thì tpd vẫn luôn bt là vẫn sẽ có bcu đồng hành cùng tpd ấy. Tồng thật sự rất rất bt ơn vì suốt quãng tgian qua và anh sẽ cố gắng hết mọi thứ có thể anh o qtam là khó khăn hay nnao miễn là có thể giữ được bcu ở bên anh thêm thật thật nhiều anni nữa ấy ạ. Tồng yêu vợ nhắm aasyyyy chúc mừng anniiii 4 năm rưỡiii",
        message: "Chúc mừng anni 4 năm rưỡi hi vọng bọn mình sẽ cùng nhau có thật nhiều nhiều anni hơn nữa nháaa!",
  
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Background image settings (Optional)
    // Different images for different pages/sections
    backgroundImages: {
        enabled: true,                    // Set to true to use background images instead of gradient
        fallbackGradient: true,          // Keep gradient as fallback if image fails to load
        opacity: 0.8,                    // Image opacity (0.0 to 1.0) - lower values make it more subtle
        size: "cover",                   // How to size the image: "cover", "contain", "auto"
        position: "center",              // Image position: "center", "top", "bottom", etc.
        repeat: "no-repeat",             // Whether to repeat: "no-repeat", "repeat", "repeat-x", "repeat-y"
        
        // Images for each section
        sections: {
            question1: "./IMG_8318.jpg",    // First page
            question2: "./IMG_8326.jpg",    // Love meter page  
            question3: "./IMG_8328.jpg",    // Final question page
            celebration: "./IMG_8318.jpg"   // Celebration page (same as first)
        }
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 