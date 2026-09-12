// Heap

// iska simple sa matlab hai ki jo bhi mera dyanmic data hoga wo heap me store hoga , matlab jinka address change ho sakta hai. iska pura detail niche likha hai.

// jitne bhi primitive data hote hai ya non primitive data wo sab heap me hi store hote hai.


// 1. Heap me hota ye hai ki ham jo variable store kara rahe hai usko kahi store kara sakte hai jo address kisi ko assign nahi kiya gaya hai

// 2. isme yadi hamko kuch change karne hai to ham jo memory size hai variable ki usse zyada ko bhi store kara sakte uske liye bas usme jagah khali honi chahiye aur usko store karane ke baad ham jo pehle wali value jo hoti hai usko delete kar dete hai

// 3. Heap me ye problem hai ki jo address us variable ko assign kiya gaya hai usko change karna padega to agar wo variable ke naam ke bahut saare variable store hai to har jagah change karna padega

// 4. heap ke problem ko solve karne ke liye hamlog jo variable ko change karna hai uske address ko stack me store kara dete hai fir agar usse hamko jo address change karna hai to bas ham stack me value ko update kar denge aur fir usse variable ko access kar sakte hai

// 5. heap ke solution ke baad jo mera variable hai uska address fix ho jaayega aur wo stack me store rahega jisko ham apne jarurat ke hisab se change kar sakte hai jo ki stack me update ho jaayega.



