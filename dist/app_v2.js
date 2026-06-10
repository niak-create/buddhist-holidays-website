// ==========================================================================
// 1. DATA DATABASE (วันสำคัญทั้ง 6 วัน)
// ==========================================================================
const HOLIDAYS_DATA = [
    {
        title: "วันมาฆบูชา",
        titleEn: "Makha Bucha Day",
        badge: "ขึ้น 15 ค่ำ เดือน 3",
        shortDesc: "วันจาตุรงคสันนิบาต พระสงฆ์ 1,250 รูปมาประชุมพร้อมกันโดยมิได้นัดหมาย พระพุทธเจ้าทรงแสดงโอวาทปาติโมกข์",
        posterPath: "assets/makha_bucha.png",
        lesson: {
            bannerSub: "วันจาตุรงคสันนิบาต การประชุมใหญ่ที่น่าอัศจรรย์",
            sections: [
                {
                    title: "ประวัติความเป็นมา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.08V8H12z"/></svg>`,
                    content: `วันมาฆบูชา ตรงกับวันเพ็ญขึ้น 15 ค่ำ เดือน 3 (หรือราวเดือนกุมภาพันธ์) คำว่า "มาฆะ" เป็นชื่อของเดือน 3 ส่วน "บูชา" หมายถึง การบูชาในเดือน 3 วันนี้ถือเป็นวันสำคัญอย่างยิ่งเนื่องจากเกิดเหตุการณ์ "จาตุรงคสันนิบาต" ซึ่งแปลว่า การประชุมพร้อมด้วยองค์ 4 หลังจากที่พระสัมมาสัมพุทธเจ้าตรัสรู้ได้ 9 เดือน ณ วัดเวฬุวันมหาวิหาร เมืองราชคฤห์`
                },
                {
                    title: "ความสำคัญและเหตุการณ์อัศจรรย์ 4 ประการ",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
                    content: `ในวันดังกล่าว มีเหตุการณ์อัศจรรย์เกิดขึ้นพร้อมกัน 4 ประการ ได้แก่:<br>
                    1. เป็นวันพระจันทร์เต็มดวง เสวยมาฆฤกษ์ (ขึ้น 15 ค่ำ เดือน 3)<br>
                    2. พระสงฆ์สาวกจำนวน 1,250 รูป เดินทางมาประชุมพร้อมกัน ณ วัดเวฬุวันมหาวิหาร โดยมิได้นัดหมาย<br>
                    3. พระภิกษุสงฆ์ทั้งหมดล้วนเป็นพระอรหันต์ผู้ได้อภิญญา 6<br>
                    4. พระสงฆ์ทั้งหมดได้รับการอุปสมบทจากพระพุทธเจ้าโดยตรง เรียกว่า "เอหิภิกขุอุปสัมปทา"`
                },
                {
                    title: "หลักธรรมสำคัญ: โอวาทปาติโมกข์",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
                    content: `พระพุทธเจ้าได้ทรงแสดงธรรมเทศนาครั้งสำคัญคือ <strong>"โอวาทปาติโมกข์"</strong> ซึ่งถือเป็นหัวใจและหลักการสำคัญของพระพุทธศาสนา โดยแบ่งออกเป็น:<br>
                    - <strong>การไม่ทำบาปทั้งปวง:</strong> การละเว้นความชั่วทางกาย วาจา ใจ<br>
                    - <strong>การทำกุศลให้ถึงพร้อม:</strong> การทำความดี สร้างประโยชน์ต่อตนเองและผู้อื่น<br>
                    - <strong>การทำจิตใจให้บริสุทธิ์ผ่องใส:</strong> การทำสมาธิ ฝึกฝนจิตใจให้ปราศจากกิเลสเครื่องเศร้าหมอง`
                },
                {
                    title: "แนวทางการปฏิบัติตนของพุทธศาสนิกชน",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-15h-2v6h2V7zm0 8h-2v2h2v-2z"/></svg>`,
                    content: `พุทธศาสนิกชนนิยมเดินทางไปวัดเพื่อบำเพ็ญกุศลต่างๆ เช่น การทำบุญตักบาตรในช่วงเช้า การฟังธรรมเทศนา การรักษาศีลเจริญภาวนา และร่วมพิธีเวียนเทียนรอบพระอุโบสถในช่วงค่ำ โดยเดินเวียนขวา (ทักษิณาวรรต) 3 รอบ เพื่อระลึกถึงคุณของพระรัตนตรัย`
                }
            ],
            highlight: "โอวาทปาติโมกข์ คือ หลักธรรมที่เป็นดั่งธรรมนูญแห่งพระพุทธศาสนา มุ่งเน้นการปฏิบัติตนให้อยู่ร่วมกันในสังคมอย่างสงบสุขและเกื้อกูลกัน"
        },
        worksheet: {
            title: "ใบความรู้ประกอบการเรียนรู้: วันมาฆบูชา",
            metaCode: "วิชาสังคมศึกษาฯ",
            metaLevel: "ระดับมัธยมศึกษา",
            sections: [
                {
                    title: "ตอนที่ 1: สรุปสาระสำคัญ",
                    text: "วันมาฆบูชาตรงกับวันขึ้น 15 ค่ำ เดือน 3 เป็นวันคล้ายวันที่พระสัมมาสัมพุทธเจ้าทรงแสดงโอวาทปาติโมกข์ แก่พระภิกษุสงฆ์อรหันต์จำนวน 1,250 รูป ที่เดินทางมาประชุมพร้อมกัน ณ วัดเวฬุวันมหาวิหาร โดยมิได้นัดหมาย ซึ่งเรียกเหตุการณ์นี้ว่า 'จาตุรงคสันนิบาต'"
                },
                {
                    title: "ตอนที่ 2: กิจกรรมตอบคำถามเพื่อทบทวนความรู้",
                    text: `ให้นักเรียนตอบคำถามต่อไปนี้ลงในช่องว่าง:<br>
                    1. เหตุการณ์อัศจรรย์ 4 ประการในวันมาฆบูชา มีอะไรบ้าง?<br>
                    ..........................................................................................................................................................<br>
                    ..........................................................................................................................................................<br>
                    2. หัวใจสำคัญของพระพุทธศาสนา 3 ประการ ได้แก่สิ่งใดบ้าง?<br>
                    ..........................................................................................................................................................`
                }
            ],
            footer: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม | พุทธศาสนศึกษาออนไลน์"
        }
    },
    {
        title: "วันวิสาขบูชา",
        titleEn: "Visakha Bucha Day",
        badge: "ขึ้น 15 ค่ำ เดือน 6",
        shortDesc: "วันสำคัญสากลของโลก คล้ายวันประสูติ ตรัสรู้ และปรินิพพาน ของพระพุทธเจ้า ซึ่งตรงกันอย่างน่าอัศจรรย์",
        posterPath: "assets/visakha_bucha.png",
        lesson: {
            bannerSub: "วันเพ็ญวิสาขะ วันครบรอบเหตุการณ์อัศจรรย์ของพระบรมศาสดา",
            sections: [
                {
                    title: "ประวัติความเป็นมา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.08V8H12z"/></svg>`,
                    content: `วันวิสาขบูชา ตรงกับวันเพ็ญขึ้น 15 ค่ำ เดือน 6 (หรือราวเดือนพฤษภาคม) คำว่า "วิสาขบูชา" หมายถึง การบูชาในวันเพ็ญเดือนวิสาขะ วันนี้ถือเป็นวันที่อัศจรรย์ที่สุดในประวัติศาสตร์พุทธศาสนา เพราะตรงกับเหตุการณ์สำคัญในพระชนม์ชีพของพระสัมมาสัมพุทธเจ้าถึง 3 เหตุการณ์`
                },
                {
                    title: "เหตุการณ์สำคัญ 3 ประการ",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
                    content: `เหตุการณ์ 3 ประการเกิดขึ้นต่างปีกัน แต่ตรงในวันเพ็ญเดือน 6 อย่างน่าอัศจรรย์ ได้แก่:<br>
                    1. <strong>วันประสูติ:</strong> เจ้าชายสิทธัตถะประสูติ ณ ลุมพินีวัน (ประเทศเนปาลในปัจจุบัน) เมื่อ 80 ปีก่อนพุทธศักราช<br>
                    2. <strong>วันตรัสรู้:</strong> เจ้าชายสิทธัตถะทรงตรัสรู้อนุตรสัมมาสัมโพธิญาณใต้ต้นอัสสัตถโพธิพฤกษ์ ริมฝั่งแม่น้ำเนรัญชรา เมื่อมีพระชนมายุ 35 พรรษา<br>
                    3. <strong>วันปรินิพพาน:</strong> พระสัมมาสัมพุทธเจ้าเสด็จดับขันธปรินิพพาน ณ สาลวโนทยาน เมืองกุสินารา เมื่อพระชนมายุ 80 พรรษา`
                },
                {
                    title: "หลักธรรมสำคัญ: อริยสัจ 4",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
                    content: `หลักธรรมที่พระพุทธเจ้าตรัสรู้คือ <strong>"อริยสัจ 4"</strong> หรือความจริงอันประเสริฐ 4 ประการ ซึ่งประกอบด้วย:<br>
                    - <strong>ทุกข์:</strong> ความไม่สบายกาย ไม่สบายใจ สภาพที่ทนได้ยาก<br>
                    - <strong>สมุทัย:</strong> สาเหตุที่ทำให้เกิดทุกข์ คือ ตัณหา (ความอยาก)<br>
                    - <strong>นิโรธ:</strong> ความดับทุกข์ คือ ความสงบเย็นจากการหมดตัณหา<br>
                    - <strong>มรรค:</strong> หนทางปฏิบัติที่นำไปสู่ความดับทุกข์ คือ มรรคมีองค์ 8`
                },
                {
                    title: "วันสำคัญสากลของโลก (Vesak Day)",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-15h-2v6h2V7zm0 8h-2v2h2v-2z"/></svg>`,
                    content: `เนื่องด้วยพระพุทธศาสนาเป็นศาสนาที่เน้นความสันติสุข ความเมตตา และปัญญา องค์การสหประชาชาติ (UN) จึงได้มีมติรับรองให้วันวิสาขบูชาเป็น <strong>"วันสำคัญสากลของโลก"</strong> ในการประชุมสมัชชาใหญ่เมื่อปี พ.ศ. 2542 เพื่อยกย่องคุณค่าอันล้ำค่าที่พระพุทธศาสนามอบให้แก่เพื่อนมนุษย์`
                }
            ],
            highlight: "อริยสัจ 4 คือแนวทางการแก้ปัญหาชีวิตอย่างเป็นระบบด้วยเหตุและผล เริ่มจากการมองปัญหาตามจริง ค้นหาสาเหตุ ตั้งเป้าหมาย และเดินตามทางสายกลาง"
        },
        worksheet: {
            title: "ใบความรู้ประกอบการเรียนรู้: วันวิสาขบูชา",
            metaCode: "วิชาสังคมศึกษาฯ",
            metaLevel: "ระดับมัธยมศึกษา",
            sections: [
                {
                    title: "ตอนที่ 1: สรุปสาระสำคัญ",
                    text: "วันวิสาขบูชาตรงกับวันเพ็ญขึ้น 15 ค่ำ เดือน 6 เป็นวันที่พุทธศาสนิกชนทั่วโลกร่วมกันนึกถึงเหตุการณ์ประสูติ ตรัสรู้ และปรินิพพานขององค์พระบรมศาสดา ซึ่งเกิดขึ้นตรงกันในเดือนวิสาขะ และได้รับยกย่องจากสหประชาชาติให้เป็นวันสำคัญสากลของโลก"
                },
                {
                    title: "ตอนที่ 2: กิจกรรมตอบคำถามเพื่อทบทวนความรู้",
                    text: `ให้นักเรียนวิเคราะห์และตอบคำถาม:<br>
                    1. ธรรมะเรื่อง 'อริยสัจ 4' มีความสำคัญอย่างไรกับการดำเนินชีวิตประจำวันของนักเรียน?<br>
                    ..........................................................................................................................................................<br>
                    ..........................................................................................................................................................<br>
                    2. ทำไมวันวิสาขบูชาจึงได้รับการยอมรับจากสมัชชาสหประชาชาติให้เป็นวันสำคัญระดับสากล?<br>
                    ..........................................................................................................................................................`
                }
            ],
            footer: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม | พุทธศาสนศึกษาออนไลน์"
        }
    },
    {
        title: "วันอาสาฬหบูชา",
        titleEn: "Asanha Bucha Day",
        badge: "ขึ้น 15 ค่ำ เดือน 8",
        shortDesc: "วันแรกที่มีพระสงฆ์เกิดขึ้นในโลก เกิดพระรัตนตรัยครบสามองค์ ทรงแสดงปฐมเทศนาธัมมจักกัปปวัตนสูตร",
        posterPath: "assets/asanha_bucha.png",
        lesson: {
            bannerSub: "วันแสดงปฐมเทศนา และวันเกิดขึ้นของพระสงฆ์รูปแรก",
            sections: [
                {
                    title: "ประวัติความเป็นมา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.08V8H12z"/></svg>`,
                    content: `วันอาสาฬหบูชา ตรงกับวันเพ็ญขึ้น 15 ค่ำ เดือน 8 (หรือราวเดือนกรกฎาคม) คำว่า "อาสาฬหะ" เป็นชื่อเดือน 8 ทางจันทรคติ วันนี้คือวันที่พระพุทธเจ้าได้ทรงประกาศพระศาสนาเป็นครั้งแรก หลังจากตรัสรู้ได้ 2 เดือน โดยแสดงธรรมโปรดกลุ่มปัญจวัคคีย์ ณ ป่าอิสิปตนมฤคทายวัน เมืองพาราณสี`
                },
                {
                    title: "การแสดงปฐมเทศนา: ธัมมจักกัปปวัตนสูตร",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
                    content: `พระธรรมเทศนากัณฑ์แรกมีชื่อว่า <strong>"ธัมมจักกัปปวัตนสูตร"</strong> หมายถึง พระสูตรว่าด้วยการหมุนกงล้อแห่งธรรม ซึ่งชี้ให้เห็นถึงสองสิ่งที่ไม่ควรปฏิบัติ (ทางสุดโต่งสองสาย) ได้แก่ การหมกมุ่นในความสุขทางโลก (กามสุขัลลิกานุโยค) และการทรมานตัวเอง (อัตตกิลมถานุโยค) และให้หันมาปฏิบัติตาม <strong>"มัชฌิมาปฏิปทา"</strong> หรือทางสายกลาง (มรรค 8)`
                },
                {
                    title: "กำเนิดพระรัตนตรัยครบองค์สาม",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
                    content: `เมื่อฟังปฐมเทศนาจบ หัวหน้าปัญจวัคคีย์คือ <strong>ท่านโกณฑัญญะ</strong> เกิดความเข้าใจแจ่มแจ้ง ดวงตาเห็นธรรม พระพุทธเจ้าทรงเปล่งวาจาว่า "อัญญาสิ วะตะ โภ โกณฑัญโญ" (โกณฑัญญะรู้แล้วหนอ) ท่านจึงกราบทูลขออุปสมบท ถือเป็นพระภิกษุสงฆ์รูปแรกในพระพุทธศาสนา (พระอัญญาโกณฑัญญะ) ทำให้วันนี้เป็นวันแรกที่มีพระรัตนตรัยครบ 3 องค์บริบูรณ์ คือ พระพุทธ พระธรรม และพระสงฆ์`
                },
                {
                    title: "หลักธรรมสำคัญ: มัชฌิมาปฏิปทา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-15h-2v6h2V7zm0 8h-2v2h2v-2z"/></svg>`,
                    content: `<strong>มัชฌิมาปฏิปทา (ทางสายกลาง)</strong> คือหลักธรรมที่หลีกเลี่ยงพฤติกรรมสุดโต่ง มุ่งเน้นการปฏิบัติตนด้วยปัญญาและความพอเหมาะพอดีในการใช้ชีวิต โดยยึดมั่นในศีล สมาธิ ปัญญา เพื่อความหลุดพ้นจากปัญหาและความทุกข์อย่างยั่งยืน`
                }
            ],
            highlight: "ความสมบูรณ์ของพระรัตนตรัยเกิดขึ้นในวันนี้ ทำให้ธรรมะของพระสัมมาสัมพุทธเจ้าได้รับการสืบทอดและเผยแผ่ต่อผู้คนมานานกว่าสองพันห้าร้อยปี"
        },
        worksheet: {
            title: "ใบความรู้ประกอบการเรียนรู้: วันอาสาฬหบูชา",
            metaCode: "วิชาสังคมศึกษาฯ",
            metaLevel: "ระดับมัธยมศึกษา",
            sections: [
                {
                    title: "ตอนที่ 1: สรุปสาระสำคัญ",
                    text: "วันอาสาฬหบูชาตรงกับวันขึ้น 15 ค่ำ เดือน 8 เป็นวันแสดงปฐมเทศนา 'ธัมมจักกัปปวัตนสูตร' แก่ปัญจวัคคีย์ทั้ง 5 และเป็นวันที่พระอัญญาโกณฑัญญะบรรลุธรรมเป็นพระภิกษุสงฆ์องค์แรกของโลก ส่งผลให้มีพระรัตนตรัยครบทั้ง 3 ประการ"
                },
                {
                    title: "ตอนที่ 2: กิจกรรมตอบคำถามเพื่อทบทวนความรู้",
                    text: `ให้นักเรียนเติมข้อความที่ถูกต้องลงในช่องว่าง:<br>
                    1. พระรัตนตรัย หมายถึง................................................................................................................. ซึ่งครบองค์ 3 ในวันนี้<br>
                    2. ปฐมเทศนาที่พระพุทธองค์ทรงแสดงมีชื่อว่า.........................................................................................................<br>
                    3. ทางสายกลาง หรือ มัชฌิมาปฏิปทา หมายถึง การหลีกเลี่ยงทางสุดโต่งสองสาย คือ:<br>
                    - ........................................................................................................................................................<br>
                    - ........................................................................................................................................................`
                }
            ],
            footer: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม | พุทธศาสนศึกษาออนไลน์"
        }
    },
    {
        title: "วันเข้าพรรษา",
        titleEn: "Khao Phansa Day",
        badge: "แรม 1 ค่ำ เดือน 8",
        shortDesc: "วันเริ่มต้นฤดูจำพรรษา 3 เดือนของพระสงฆ์ เพื่อไม่ให้เหยียบย่ำข้าวกล้าของชาวบ้าน มีประเพณีถวายเทียนและผ้าอาบน้ำฝน",
        posterPath: "assets/khao_phansa.png",
        lesson: {
            bannerSub: "ประเพณีการจำพรรษา และการแห่เทียนพรรษาอันงดงาม",
            sections: [
                {
                    title: "ประวัติความเป็นมา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.08V8H12z"/></svg>`,
                    content: `วันเข้าพรรษา ตรงกับวันแรม 1 ค่ำ เดือน 8 (หรือเดือนกรกฎาคม) ยาวไปจนถึงขึ้น 15 ค่ำ เดือน 11 ในสมัยพุทธกาล พระภิกษุสงฆ์ยังไม่มีการจำพรรษาตายตัว จึงจาริกเผยแผ่ธรรมตลอดปี จนชาวบ้านร้องเรียนว่าพระสงฆ์เดินเหยียบย่ำข้าวกล้า ต้นไม้ และสัตว์เล็กๆ ในฤดูฝนเสียหาย พระพุทธเจ้าจึงทรงบัญญัติให้พระภิกษุสงฆ์ต้องอยู่ประจำที่วัดเป็นเวลา 3 เดือนในฤดูฝน`
                },
                {
                    title: "ประเพณีและวัฒนธรรมในวันเข้าพรรษา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
                    content: `เนื่องจากพระสงฆ์ต้องพำนักอยู่ในวัดเป็นเวลานานโดยไม่ไปค้างอ้างแรมที่อื่น พุทธศาสนิกชนจึงเกิดประเพณีสนับสนุนการจำพรรษา ได้แก่:<br>
                    - <strong>การถวายผ้าอาบน้ำฝน:</strong> ผ้าสำหรับผลัดเปลี่ยนขณะสรงน้ำฝน<br>
                    - <strong>การหล่อเทียนและถวายเทียนพรรษา:</strong> เพื่อให้พระสงฆ์มีแสงสว่างจุดเพื่อสวดมนต์และศึกษาพระไตรปิฎกในเวลากลางคืน ซึ่งนำไปสู่ประเพณีแห่เทียนพรรษาอันยิ่งใหญ่ในหลายจังหวัด เช่น อุบลราชธานี`
                },
                {
                    title: "หลักธรรมสำคัญ: วิริยะ (ความเพียร)",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
                    content: `ช่วงเข้าพรรษาถือเป็นเวลาทองของการบำเพ็ญเพียร พระสงฆ์จะตั้งใจศึกษาปฏิบัติธรรมอย่างจริงจัง ส่วนพุทธศาสนิกชนก็นิยมใช้โอกาสนี้ในการฝึกฝนตนเองด้วย <strong>"ความเพียรพยายาม (วิริยะ)"</strong> และการสมาทานศีลอุโบสถ หรือตั้งจิตสัจจะงดเว้นอบายมุข เช่น โครงการ "งดเหล้าเข้าพรรษา" เพื่อพัฒนาสุขภาพและสร้างความดีงามในครอบครัว`
                }
            ],
            highlight: "การเข้าพรรษาไม่ได้จำกัดเพียงหน้าที่ของพระภิกษุสงฆ์ แต่เป็นช่วงเวลาแห่งความจริงจังที่พุทธศาสนิกชนจะได้ตั้งสัจจะทำความดีและฝึกฝนตนเองร่วมกันด้วย"
        },
        worksheet: {
            title: "ใบความรู้ประกอบการเรียนรู้: วันเข้าพรรษา",
            metaCode: "วิชาสังคมศึกษาฯ",
            metaLevel: "ระดับมัธยมศึกษา",
            sections: [
                {
                    title: "ตอนที่ 1: สรุปสาระสำคัญ",
                    text: "วันเข้าพรรษาตรงกับวันแรม 1 ค่ำ เดือน 8 เป็นวันบัญญัติให้พระสงฆ์ต้องจำพรรษาอยู่ ณ อารามใดอารามหนึ่งตลอดฤดูฝน 3 เดือน เพื่อไม่ให้จาริกเหยียบย่ำข้าวกล้าเกษตรกร ก่อเกิดเป็นวัฒนธรรมการถวายเทียนพรรษา ผ้าอาบน้ำฝน และการสมาทานศีลงดเว้นความชั่วตลอดพรรษา"
                },
                {
                    title: "ตอนที่ 2: กิจกรรมตอบคำถามเพื่อทบทวนความรู้",
                    text: `ให้นักเรียนวิเคราะห์และตอบคำถาม:<br>
                    1. เหตุใดพระสัมมาสัมพุทธเจ้าจึงต้องทรงบัญญัติพระวินัยเรื่องการจำพรรษาแก่พระภิกษุสงฆ์?<br>
                    ..........................................................................................................................................................<br>
                    2. ประเพณีการถวายเทียนพรรษาในอดีตมีวัตถุประสงค์เพื่ออะไร และในปัจจุบันมีการปรับประยุกต์อย่างไรบ้าง?<br>
                    ..........................................................................................................................................................`
                }
            ],
            footer: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม | พุทธศาสนศึกษาออนไลน์"
        }
    },
    {
        title: "วันออกพรรษา",
        titleEn: "Ok Phansa Day",
        badge: "ขึ้น 15 ค่ำ เดือน 11",
        shortDesc: "วันสิ้นสุดการจำพรรษา เรียกอีกชื่อว่าวันมหาปวารณา เปิดโอกาสให้ตักเตือนกันเพื่อความบริสุทธิ์ มีประเพณีตักบาตรเทโว",
        posterPath: "assets/ok_phansa.png",
        lesson: {
            bannerSub: "วันปวารณาออกพรรษา และประเพณีตักบาตรเทโวโรหณะ",
            sections: [
                {
                    title: "ประวัติความเป็นมาและวันมหาปวารณา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.08V8H12z"/></svg>`,
                    content: `วันออกพรรษา ตรงกับวันขึ้น 15 ค่ำ เดือน 11 (หรือราวเดือนตุลาคม) เป็นวันสิ้นสุดการจำพรรษาตลอดระยะเวลา 3 เดือนของพระภิกษุสงฆ์ วันนี้ถูกเรียกอีกชื่อหนึ่งว่า <strong>"วันมหาปวารณา"</strong> ซึ่งมีความสำคัญในทางพระวินัยอย่างยิ่ง`
                },
                {
                    title: "การทำปวารณา: เสรีภาพและการวิจารณ์เชิงบวก",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
                    content: `คำว่า "ปวารณา" แปลว่า อนุญาต หรือ ยอมให้ตักเตือน คือการเปิดโอกาสให้พระภิกษุสงฆ์ในวัดกราบเรียนชี้แนะตักเตือนกันได้ว่า ได้เห็น ได้ยิน หรือเกิดความสงสัยในพฤติกรรมที่ไม่ดีเหมาะสมประการใด ถือเป็นกลไกสร้างความบริสุทธิ์สามัคคีในคณะสงฆ์ตามวิถีประชาธิปไตย โดยลดทอนระดับชั้นยศและความอาวุโสชั่วคราว`
                },
                {
                    title: "ประเพณีตักบาตรเทโวโรหณะ",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
                    content: `ในวันถัดจากวันออกพรรษา (แรม 1 ค่ำ เดือน 11) จะมีประเพณีสำคัญคือ <strong>"ตักบาตรเทโวโรหณะ"</strong> เพื่อรำลึกถึงเหตุการณ์ตามพุทธประวัติที่พระพุทธเจ้าเสด็จกลับลงมาจากสวรรค์ชั้นดาวดึงส์หลังจากทรงไปจำพรรษาเพื่อเทศนาโปรดพระพุทธมารดา โดยพระพุทธองค์ทรงเปรียบเสมือนเปิดโลกทั้งสาม (สวรรค์ มนุษย์ นรก) ให้เห็นแจ้งถึงกัน`
                }
            ],
            highlight: "วันปวารณาออกพรรษาสอนให้คนเรารู้จักรับฟังคำวิจารณ์ตักเตือนจากผู้อื่นด้วยใจที่เปิดกว้างและมีเมตตา เพื่อนำมาปรับปรุงพัฒนาชีวิตตนเอง"
        },
        worksheet: {
            title: "ใบความรู้ประกอบการเรียนรู้: วันออกพรรษา",
            metaCode: "วิชาสังคมศึกษาฯ",
            metaLevel: "ระดับมัธยมศึกษา",
            sections: [
                {
                    title: "ตอนที่ 1: สรุปสาระสำคัญ",
                    text: "วันออกพรรษาตรงกับวันเพ็ญขึ้น 15 ค่ำ เดือน 11 เป็นวันสิ้นสุดการจำพรรษา 3 เดือนของพระสงฆ์ และได้รับการขนานนามเป็นวันปวารณา เพื่อชี้แนะข้อบกพร่องกันได้ด้วยความหวังดี นำมาซึ่งประเพณีตักบาตรเทโวโรหณะในวันแรม 1 ค่ำ"
                },
                {
                    title: "ตอนที่ 2: กิจกรรมตอบคำถามเพื่อทบทวนความรู้",
                    text: `ให้นักเรียนตอบคำถามลงในกระดาษเรียนรู้:<br>
                    1. 'การปวารณา' ของพระสงฆ์ในวันออกพรรษามีลักษณะคล้ายคลึงกับกลไกทางสังคมในปัจจุบันอย่างไรบ้าง?<br>
                    ..........................................................................................................................................................<br>
                    2. การตักบาตรเทโวโรหณะมีที่มาที่ไปจากพุทธประวัติตอนใด?<br>
                    ..........................................................................................................................................................`
                }
            ],
            footer: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม | พุทธศาสนศึกษาออนไลน์"
        }
    },
    {
        title: "วันอัฏฐมีบูชา",
        titleEn: "Athami Bucha Day",
        badge: "แรม 8 ค่ำ เดือน 6",
        shortDesc: "วันคล้ายวันถวายพระเพลิงพระบรมศพของพระพุทธเจ้า เพื่อระลึกถึงพระคุณของพระองค์และปลงสังขารตามหลักความไม่ประมาท",
        posterPath: "assets/athami_bucha.png",
        lesson: {
            bannerSub: "วันน้อมระลึกถึงพระมหากรุณาธิคุณ และความไม่เที่ยงแท้ของชีวิต",
            sections: [
                {
                    title: "ประวัติความเป็นมา",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.08V8H12z"/></svg>`,
                    content: `วันอัฏฐมีบูชา ตรงกับวันแรม 8 ค่ำ เดือน 6 (หรือ 8 วันหลังจากวันวิสาขบูชา) เป็นวันสำคัญที่พุทธศาสนิกชนจัดพิธีน้อมรำลึกถึงพระมหากรุณาธิคุณของพระพุทธเจ้า เนื่องจากเป็นวันคล้ายวันถวายพระเพลิงพระพุทธสรีระ ณ มกุฏพันธนเจดีย์ เมืองกุสินารา แคว้นมัลละ`
                },
                {
                    title: "ความสำคัญและเหตุการณ์สำคัญ",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
                    content: `ภายหลังพระสัมมาสัมพุทธเจ้าเสด็จดับขันธปรินิพพานไปได้ 8 วัน เหล่ามัลลกษัตริย์และคณะสงฆ์มีพระมหากัสสปเถระเป็นประธาน ได้พร้อมใจกันประกอบพิธีถวายพระเพลิงพระพุทธสรีระ ซึ่งในระหว่างนั้นเกิดเหตุอัศจรรย์คือ จิตกาธาน (เชิงตะกอน) ดับลงไม่ยอมติดไฟจนกระทั่งพระมหากัสสปเถระเดินทางมาถึงและกราบไหว้พระพุทธบาท ไฟจึงลุกโชติช่วงขึ้นมาเองโดยไม่มีคนจุด`
                },
                {
                    title: "หลักธรรมสำคัญ: อนิจจัง และ อัปปมาทะ (ความไม่ประมาท)",
                    icon: `<svg class="section-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
                    content: `วันอัฏฐมีบูชาเตือนสติชาวพุทธถึงหลักความจริงสูงสุดเรื่อง <strong>"อนิจจัง (ความไม่เที่ยงแท้)"</strong> สังขารร่างกายต้องเสื่อมสลายไปเป็นธรรมดา แม้กระทั่งพระวรกายของพระพุทธเจ้า ดังนั้น ทุกคนจึงต้องดำเนินชีวิตด้วยความไม่ประมาท หรือ <strong>"อัปปมาทธรรม"</strong> เร่งทำความดีและใช้เวลาที่มีคุณค่าบำเพ็ญกุศลและพัฒนาปัญญาให้ถึงพร้อมก่อนความตายจะมาถึง`
                }
            ],
            highlight: "ปัจฉิมโอวาทของพระพุทธเจ้าคือ 'ภิกษุทั้งหลาย บัดนี้เราขอเตือนท่านทั้งหลาย สังขารทั้งหลายมีความเสื่อมสลายไปเป็นธรรมดา ท่านทั้งหลายจงบำเพ็ญประโยชน์ตนและประโยชน์ท่านให้ถึงพร้อมด้วยความไม่ประมาทเถิด'"
        },
        worksheet: {
            title: "ใบความรู้ประกอบการเรียนรู้: วันอัฏฐมีบูชา",
            metaCode: "วิชาสังคมศึกษาฯ",
            metaLevel: "ระดับมัธยมศึกษา",
            sections: [
                {
                    title: "ตอนที่ 1: สรุปสาระสำคัญ",
                    text: "วันอัฏฐมีบูชาตรงกับวันแรม 8 ค่ำ เดือน 6 เป็นวันถวายพระเพลิงพระพุทธสรีระของพระศาสดา ณ เมืองกุสินารา เตือนใจให้ตระหนักถึงพระไตรลักษณ์ (อนิจจัง ทุกขัง อนัตตา) และความสำคัญของการบำเพ็ญประโยชน์ด้วยความไม่ประมาท"
                },
                {
                    title: "ตอนที่ 2: กิจกรรมตอบคำถามเพื่อทบทวนความรู้",
                    text: `ให้นักเรียนอภิปรายข้อคิดเห็น:<br>
                    1. พระปัจฉิมโอวาทของพระพุทธเจ้าที่เน้นย้ำเรื่อง 'ความไม่ประมาท' มีความสำคัญอย่างไรในยุคปัจจุบัน?<br>
                    ..........................................................................................................................................................<br>
                    2. การปลงอนิจจสังขารจากเหตุการณ์ถวายพระเพลิงพระบรมศพ ช่วยขจัดขัดเกลาความโลภในจิตใจเราอย่างไร?<br>
                    ..........................................................................................................................................................`
                }
            ],
            footer: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม | พุทธศาสนศึกษาออนไลน์"
        }
    }
];

// ==========================================================================
// 2. BACKEND & DATABASE SETUP (CLOUDFLARE KV & LOCAL FALLBACK)
// ==========================================================================
let useCloudMode = false;

async function checkBackendAvailability() {
    if (!window.location.protocol.startsWith("http")) {
        useCloudMode = false;
        return;
    }
    try {
        const response = await fetch("/api/settings", { method: "GET" });
        if (response.ok) {
            useCloudMode = true;
            console.log("Cloud Mode Activated: Connected to Cloudflare backend.");
        } else {
            useCloudMode = false;
            console.log("Local Mode Activated: Backend returned status " + response.status);
        }
    } catch (err) {
        useCloudMode = false;
        console.log("Local Mode Activated: Backend unreachable. Using offline fallback.");
    }
}

// Local IndexedDB Fallback
const DB_NAME = 'BuddhistHolidaysDB';
const DB_VERSION = 1;
const STORE_NAME = 'custom_pdfs';
let db = null;

function initDB() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            console.warn("เบราว์เซอร์นี้ไม่รองรับ IndexedDB");
            return resolve(null);
        }
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains(STORE_NAME)) {
                database.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = (e) => {
            db = e.target.result;
            resolve(db);
        };
        request.onerror = (e) => {
            console.error("IndexedDB Open Error: ", e.target.error);
            reject(e.target.error);
        };
    });
}

function saveCustomPDF(idx, fileBase64) {
    return new Promise((resolve, reject) => {
        if (!db) return reject("IndexedDB not ready");
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(fileBase64, idx.toString());
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

function getCustomPDF(idx) {
    return new Promise((resolve, reject) => {
        if (!db) return resolve(null);
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(idx.toString());
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

function deleteCustomPDF(idx) {
    return new Promise((resolve, reject) => {
        if (!db) return reject("IndexedDB not ready");
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(idx.toString());
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

function clearAllCustomPDFs() {
    return new Promise((resolve, reject) => {
        if (!db) return resolve();
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

function saveCustomWorksheetImage(idx, fileBase64) {
    return new Promise((resolve, reject) => {
        if (!db) return reject("IndexedDB not ready");
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(fileBase64, idx.toString() + '_img');
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

function getCustomWorksheetImage(idx) {
    return new Promise((resolve, reject) => {
        if (!db) return resolve(null);
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(idx.toString() + '_img');
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

function deleteCustomWorksheetImage(idx) {
    return new Promise((resolve, reject) => {
        if (!db) return reject("IndexedDB not ready");
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(idx.toString() + '_img');
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

// ==========================================================================
// 3. UI STATE & APP INITIALIZATION
// ==========================================================================
let currentHolidayIndex = 0;
let currentZoom = 100;
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

// Default Settings (ครูและวิชาเริ่มต้น)
const DEFAULT_SETTINGS = {
    teacherName: "คุณครูจุติพร สุขตระกูล",
    schoolName: "โรงเรียนอ่างศิลาพิทยาคม",
    subjectTitle: "สังคมศึกษา BY Kru.Piee",
    welcomeText: "เรื่อง \"วันสำคัญทางศาสนาพุทธ\" สื่อการเรียนรู้ที่รวบรวมเนื้อหา ใบงาน และโปสเตอร์ความรู้ เพื่อพัฒนาการเรียนรู้ของผู้เรียนอย่างสร้างสรรค์",
    teacherAvatar: "photo/4011.jpg",
    logoImg: "photo/LOGO.png",
    bannerImg: "assets/banner.png",
    teacherPassword: "5018",
    holiday_0_img: "",
    holiday_1_img: "",
    holiday_2_img: "",
    holiday_3_img: "",
    holiday_4_img: "",
    holiday_5_img: "",
    hasCustomPDF_0: false,
    hasCustomPDF_1: false,
    hasCustomPDF_2: false,
    hasCustomPDF_3: false,
    hasCustomPDF_4: false,
    hasCustomPDF_5: false,
    hasCustomWorksheetImg_0: false,
    hasCustomWorksheetImg_1: false,
    hasCustomWorksheetImg_2: false,
    hasCustomWorksheetImg_3: false,
    hasCustomWorksheetImg_4: false,
    hasCustomWorksheetImg_5: false,
};

// State Settings
let appSettings = {};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

async function initApp() {
    // 3.0 Check backend availability
    await checkBackendAvailability();

    // 3.1 Initialize IndexedDB (only if local mode)
    if (!useCloudMode) {
        try {
            await initDB();
        } catch (err) {
            console.error("Failed to initialize IndexedDB, app will use memory fallback.", err);
        }
    }

    // 3.2 Load settings
    try {
        await loadSettings();
    } catch (err) {
        console.error("Failed to load settings:", err);
    }

    // 3.3 Render main grid cards
    try {
        renderHolidaysGrid();
    } catch (err) {
        console.error("Failed to render holidays grid:", err);
    }

    // 3.4 Wire up Event Listeners
    try {
        setupEventHandlers();
    } catch (err) {
        console.error("Failed to set up event handlers:", err);
    }

    // 3.5 Check URL status if we want to show anything default
    try {
        showView("intro-view");
    } catch (err) {
        console.error("Failed to show initial view:", err);
    }
}

// ==========================================================================
// 4. LOAD & SAVE SETTINGS (LOCALSTORAGE & CLOUD KV)
// ==========================================================================
async function loadSettings() {
    if (useCloudMode) {
        try {
            const res = await fetch("/api/settings");
            if (res.ok) {
                const cloudSettings = await res.json();
                if (Object.keys(cloudSettings).length > 0) {
                    appSettings = { ...DEFAULT_SETTINGS, ...cloudSettings };
                } else {
                    appSettings = { ...DEFAULT_SETTINGS };
                }
            } else {
                appSettings = { ...DEFAULT_SETTINGS };
            }
        } catch (err) {
            console.error("Error fetching cloud settings, using default settings:", err);
            appSettings = { ...DEFAULT_SETTINGS };
        }
    } else {
        const saved = localStorage.getItem("buddhist_holidays_settings");
        if (saved) {
            appSettings = JSON.parse(saved);
            appSettings = { ...DEFAULT_SETTINGS, ...appSettings };
            
            if (appSettings.subjectTitle === "สังคมศึกษา ศาสนา และวัฒนธรรม") {
                appSettings.subjectTitle = DEFAULT_SETTINGS.subjectTitle;
                localStorage.setItem("buddhist_holidays_settings", JSON.stringify(appSettings));
            }

            if (!appSettings.logoImg || appSettings.logoImg === "") {
                appSettings.logoImg = DEFAULT_SETTINGS.logoImg;
            }
        } else {
            appSettings = { ...DEFAULT_SETTINGS };
        }
    }
    applySettingsToDOM();
}

async function saveSettings(settingsObj) {
    appSettings = { ...appSettings, ...settingsObj };
    if (useCloudMode) {
        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": appSettings.teacherPassword || "5018"
                },
                body: JSON.stringify(appSettings)
            });
            if (!res.ok) {
                const errJson = await res.json();
                throw new Error(errJson.error || "Save settings failed");
            }
        } catch (err) {
            console.error("Failed to save settings to cloud:", err);
            alert("ไม่สามารถบันทึกการตั้งค่าลงระบบคลาวด์ได้: " + err.message);
        }
    } else {
        localStorage.setItem("buddhist_holidays_settings", JSON.stringify(appSettings));
    }
    applySettingsToDOM();
}

function applySettingsToDOM() {
    // 1. หน้า Intro
    document.getElementById("intro-teacher-name").textContent = appSettings.teacherName;
    document.getElementById("intro-teacher-school").textContent = appSettings.schoolName;
    document.getElementById("intro-badge").textContent = appSettings.subjectTitle;
    document.getElementById("intro-desc").textContent = appSettings.welcomeText;
    document.getElementById("intro-teacher-avatar").src = appSettings.teacherAvatar;

    // 2. หน้าหลัก Header
    document.getElementById("header-subject-title").textContent = appSettings.subjectTitle;
    
    // ตั้งค่ารูปภาพโลโก้
    const logoImg = document.getElementById("header-logo-img");
    if (appSettings.logoImg) {
        logoImg.src = appSettings.logoImg;
        logoImg.style.display = "block";
    } else {
        logoImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23E5A93C"/><text x="50%" y="60%" font-size="45" font-family="sans-serif" text-anchor="middle" fill="white" font-weight="bold">${appSettings.subjectTitle.charAt(0) || 'พ'}</text></svg>`;
    }

    // แบนเนอร์หลัก
    document.getElementById("banner-img").src = appSettings.bannerImg;

    // 3. Footer ทั้งสองหน้า
    document.getElementById("footer-t-name").textContent = appSettings.teacherName;
    document.getElementById("footer-t-school").textContent = appSettings.schoolName;
    document.getElementById("footer-t-name2").textContent = appSettings.teacherName;
    document.getElementById("footer-t-school2").textContent = appSettings.schoolName;

    // 4. อัปเดตข้อมูลในฟอร์มแก้ไข (Settings Modal)
    document.getElementById("cfg-teacher-name").value = appSettings.teacherName;
    document.getElementById("cfg-school-name").value = appSettings.schoolName;
    document.getElementById("cfg-subject-title").value = appSettings.subjectTitle;
    document.getElementById("cfg-welcome-text").value = appSettings.welcomeText;

    // พรีวิวภาพในโมดอลตั้งค่า
    document.getElementById("preview-teacher-img").querySelector("img").src = appSettings.teacherAvatar;
    document.getElementById("preview-banner-img").querySelector("img").src = appSettings.bannerImg;
    
    const logoPreview = document.getElementById("preview-logo-img");
    if (appSettings.logoImg) {
        logoPreview.innerHTML = `<img src="${appSettings.logoImg}" alt="โลโก้วิชา">`;
    } else {
        logoPreview.innerHTML = `<span class="logo-preview-placeholder">${appSettings.subjectTitle.charAt(0) || 'พ'}</span>`;
    }

    // อัปเดตพรีวิวรูปปกและปุ่มรีเซ็ตของทั้ง 6 วันสำคัญใน Settings Modal
    for (let i = 0; i < 6; i++) {
        const customImg = appSettings[`holiday_${i}_img`];
        const previewContainer = document.getElementById(`preview-holiday-${i}`);
        const resetBtn = document.querySelector(`.btn-reset-holiday-img[data-idx="${i}"]`);
        
        if (previewContainer) {
            const imgEl = previewContainer.querySelector("img");
            if (imgEl) {
                imgEl.src = customImg || HOLIDAYS_DATA[i].posterPath;
            }
        }
        
        if (resetBtn) {
            if (customImg && customImg !== "") {
                resetBtn.style.display = "inline-block";
            } else {
                resetBtn.style.display = "none";
            }
        }
    }

    // อัปเดตสถานะไฟล์ PDF ในโมดอลตั้งค่า
    updateModalPDFStatuses();
    // อัปเดตสถานะรูปภาพใบความรู้ ในโมดอลตั้งค่า
    updateModalWorksheetImageStatuses();
}

async function updateModalPDFStatuses() {
    for (let i = 0; i < 6; i++) {
        let hasCustom = false;
        if (useCloudMode) {
            hasCustom = !!appSettings[`hasCustomPDF_${i}`];
        } else {
            const base64 = await getCustomPDF(i);
            hasCustom = !!base64;
        }
        const statusLabel = document.getElementById(`pdf-status-${i}`);
        const resetBtn = document.querySelector(`.btn-reset-pdf[data-idx="${i}"]`);
        
        if (statusLabel) {
            if (hasCustom) {
                statusLabel.textContent = "ใช้ไฟล์ PDF ที่อัปโหลดแล้ว";
                statusLabel.classList.add("has-uploaded");
                if (resetBtn) resetBtn.style.display = "inline-block";
            } else {
                statusLabel.textContent = "ใช้ใบความรู้ระบบเริ่มต้น";
                statusLabel.classList.remove("has-uploaded");
                if (resetBtn) resetBtn.style.display = "none";
            }
        }
    }
}

async function updateModalWorksheetImageStatuses() {
    for (let i = 0; i < 6; i++) {
        let hasCustom = false;
        if (useCloudMode) {
            hasCustom = !!appSettings[`hasCustomWorksheetImg_${i}`];
        } else {
            const base64 = await getCustomWorksheetImage(i);
            hasCustom = !!base64;
        }
        const statusLabel = document.getElementById(`worksheet-img-status-${i}`);
        const resetBtn = document.querySelector(`.btn-reset-worksheet-img[data-idx="${i}"]`);
        
        if (statusLabel) {
            if (hasCustom) {
                statusLabel.textContent = "ใช้รูปภาพที่อัปโหลดแล้ว";
                statusLabel.classList.add("has-uploaded");
                if (resetBtn) resetBtn.style.display = "inline-block";
            } else {
                statusLabel.textContent = "ใช้รูปภาพระบบเริ่มต้น";
                statusLabel.classList.remove("has-uploaded");
                if (resetBtn) resetBtn.style.display = "none";
            }
        }
    }
}

// ==========================================================================
// 5. RENDER MAIN PAGE HOLIDAYS CARDS
// ==========================================================================
function renderHolidaysGrid() {
    const grid = document.getElementById("holidays-grid");
    grid.innerHTML = "";

    HOLIDAYS_DATA.forEach((holiday, idx) => {
        const card = document.createElement("div");
        card.className = "holiday-card";
        const customImg = appSettings[`holiday_${idx}_img`];
        const cardImgSrc = customImg && customImg !== "" ? customImg : holiday.posterPath;
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${cardImgSrc}" alt="${holiday.title}">
                <span class="card-badge">${holiday.badge}</span>
            </div>
            <div class="card-body">
                <h4>${holiday.title}</h4>
                <div class="card-body-en">${holiday.titleEn}</div>
                <p class="card-desc">${holiday.shortDesc}</p>
                <div class="card-actions">
                    <button class="btn btn-primary btn-study" data-idx="${idx}">
                        <span>ศึกษาบทเรียน</span>
                        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add click event to buttons inside cards
    grid.querySelectorAll(".btn-study").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(btn.getAttribute("data-idx"));
            openHolidayDetails(idx);
        });
    });
}

// ==========================================================================
// 6. ROUTING / PAGE SWITCHING
// ==========================================================================
function showView(viewId) {
    document.querySelectorAll(".view").forEach(view => {
        view.classList.remove("active");
    });
    
    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.classList.add("active");
    }

    // Scroll to top with safe fallback for older browsers
    try {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
        window.scrollTo(0, 0);
    }
}

// ==========================================================================
// 7. HOLIDAY DETAIL & TAB PANEL CONTENT POPULATION
// ==========================================================================
async function openHolidayDetails(idx) {
    currentHolidayIndex = idx;
    const data = HOLIDAYS_DATA[idx];

    // 1. ตั้งค่าชื่อบทเรียน
    document.getElementById("current-holiday-title").textContent = data.title;
    document.getElementById("current-holiday-title-en").textContent = data.titleEn;

    // 2. โหลดใบความรู้ PDF
    await loadPDFViewer(idx);

    // 3. รีเซ็ตซูม
    resetZoom();

    // เปิดหน้าเนื้อหา
    showView("content-view");
}

function switchTab(tabName) {
    // 1. สลับคลาสปุ่มแท็บ
    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // 2. สลับการแสดงผลพาเนล
    document.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.id === `tab-panel-${tabName}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });

    // ถ้าเปิดแท็บ PDF ให้รีเซ็ตซูมให้พอดี
    if (tabName === "pdf") {
        resetZoom();
    }
}

function getDefaultPDFPath(idx) {
    const names = [
        "วันมาฆบูชา",
        "วันวิสาขบูชา",
        "วันอาสาฬหบูชา",
        "วันเข้าพรรษา",
        "วันออกพรรษา",
        "วันอัฐมีบูชา"
    ];
    return `ใบความรู้/${names[idx]}.pdf`;
}

function getDefaultWorksheetImagePath(idx) {
    const names = [
        "มาฆ",
        "วิสา",
        "อาสาฬห",
        "เข้า",
        "ออก",
        "อัฐมี"
    ];
    return `photo/${names[idx]}.png`;
}

async function loadPDFViewer(holidayIdx) {
    const imgElement = document.getElementById("worksheet-img");
    if (!imgElement) return;

    if (useCloudMode) {
        if (appSettings[`hasCustomWorksheetImg_${holidayIdx}`]) {
            imgElement.src = `/api/file?key=img_${holidayIdx}`;
        } else {
            imgElement.src = getDefaultWorksheetImagePath(holidayIdx);
        }
    } else {
        const customImgBase64 = await getCustomWorksheetImage(holidayIdx);
        if (customImgBase64) {
            imgElement.src = customImgBase64;
        } else {
            imgElement.src = getDefaultWorksheetImagePath(holidayIdx);
        }
    }
}

// Zoom control functions
function setZoom(zoomVal) {
    // จำกัดช่วงการขยาย 50% - 200%
    currentZoom = Math.max(50, Math.min(200, zoomVal));
    
    // อัปเดต Display เปอร์เซ็นต์
    document.getElementById("zoom-percent-display").textContent = `${currentZoom}%`;
    document.getElementById("zoom-slider").value = currentZoom;

    // อัปเดต Style Zoom บนแคนวาสห่อหุ้ม
    const canvas = document.getElementById("pdf-canvas-wrapper");
    canvas.style.transform = `scale(${currentZoom / 100})`;

    // ถ้าซูมมากกว่า 100% ให้แสดงมือลากจับขยับได้ (Pan)
    const viewport = document.getElementById("pdf-viewport");
    if (currentZoom > 100) {
        viewport.classList.add("zoomed");
    } else {
        viewport.classList.remove("zoomed");
        // รีเซ็ตการเลื่อนแกน X/Y เมื่อไม่ได้ซูม
        viewport.scrollLeft = 0;
        viewport.scrollTop = 0;
    }
}

function zoomIn() {
    setZoom(currentZoom + 10);
}

function zoomOut() {
    setZoom(currentZoom - 10);
}

function resetZoom() {
    const width = window.innerWidth;
    if (width < 850) {
        // เล็กกว่าแผ่น A4 ให้สเกลลดหลั่นย่อลงพอดี
        const percent = Math.floor((width - 60) / 800 * 100);
        setZoom(percent < 50 ? 50 : percent);
    } else {
        setZoom(100);
    }
}

// ==========================================================================
// 9. EVENT HANDLERS SETUP & BINDING
// ==========================================================================
function setupEventHandlers() {
    // 9.1 SPA View Navigation Buttons
    document.getElementById("btn-enter-lesson").addEventListener("click", () => {
        showView("main-view");
    });
    
    document.getElementById("btn-goto-intro").addEventListener("click", () => {
        showView("intro-view");
    });

    document.getElementById("btn-back-to-main").addEventListener("click", () => {
        showView("main-view");
    });

    // 9.2 Tabs click
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const tabName = btn.getAttribute("data-tab");
            switchTab(tabName);
        });
    });

    // 9.3 PDF Zooming Handlers
    document.getElementById("btn-zoom-in").addEventListener("click", zoomIn);
    document.getElementById("btn-zoom-out").addEventListener("click", zoomOut);
    document.getElementById("zoom-slider").addEventListener("input", (e) => {
        setZoom(parseInt(e.target.value));
    });
    document.getElementById("btn-zoom-reset").addEventListener("click", resetZoom);

    // ปรับรีเซ็ตซูมอัตโนมัติเมื่อขนาดเบราว์เซอร์เปลี่ยน
    window.addEventListener("resize", () => {
        const activeView = document.getElementById("content-view");
        const activeTab = document.querySelector(".tab-btn.active");
        if (activeView.classList.contains("active") && activeTab && activeTab.getAttribute("data-tab") === "pdf") {
            resetZoom();
        }
    });

    // 9.4 Drag-to-Pan (เมาส์ลากดูเมื่อหน้ากระดาษซูมเกิน 100%)
    const viewport = document.getElementById("pdf-viewport");
    
    viewport.addEventListener("mousedown", (e) => {
        if (currentZoom <= 100) return;
        isDragging = true;
        viewport.style.cursor = "grabbing";
        startX = e.pageX - viewport.offsetLeft;
        startY = e.pageY - viewport.offsetTop;
        scrollLeft = viewport.scrollLeft;
        scrollTop = viewport.scrollTop;
    });

    viewport.addEventListener("mouseleave", () => {
        isDragging = false;
        if (currentZoom > 100) viewport.style.cursor = "grab";
    });

    viewport.addEventListener("mouseup", () => {
        isDragging = false;
        if (currentZoom > 100) viewport.style.cursor = "grab";
    });

    viewport.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - viewport.offsetLeft;
        const y = e.pageY - viewport.offsetTop;
        const walkX = (x - startX) * 1.5; // ตัวช่วยเร่งสปีด
        const walkY = (y - startY) * 1.5;
        viewport.scrollLeft = scrollLeft - walkX;
        viewport.scrollTop = scrollTop - walkY;
    });

    // 9.5 Touch Event สำหรับลากเลื่อนบนมือถือ และระบบถ่างขยายหน้ากระดาษ (Pinch-to-zoom)
    let touchStartDist = 0;
    
    viewport.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            // Drag pan single touch
            isDragging = true;
            startX = e.touches[0].pageX - viewport.offsetLeft;
            startY = e.touches[0].pageY - viewport.offsetTop;
            scrollLeft = viewport.scrollLeft;
            scrollTop = viewport.scrollTop;
        } else if (e.touches.length === 2) {
            // Pinch touch
            isDragging = false;
            touchStartDist = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
        }
    });

    viewport.addEventListener("touchmove", (e) => {
        if (isDragging && e.touches.length === 1) {
            const x = e.touches[0].pageX - viewport.offsetLeft;
            const y = e.touches[0].pageY - viewport.offsetTop;
            const walkX = (x - startX) * 1.2;
            const walkY = (y - startY) * 1.2;
            viewport.scrollLeft = scrollLeft - walkX;
            viewport.scrollTop = scrollTop - walkY;
        } else if (e.touches.length === 2) {
            // Pinch scaling
            e.preventDefault();
            const dist = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            const factor = dist / touchStartDist;
            if (factor > 1.05) {
                zoomIn();
                touchStartDist = dist; // ปรับหลักจับตำแหน่งเริ่มต้นใหม่
            } else if (factor < 0.95) {
                zoomOut();
                touchStartDist = dist;
            }
        }
    });

    viewport.addEventListener("touchend", () => {
        isDragging = false;
    });

    // 9.6 PDF Download inside content view
    document.getElementById("btn-download-pdf").addEventListener("click", () => {
        downloadPDFWorksheet();
    });



    // 9.8 Settings Modal togglers
    const settingsModal = document.getElementById("settings-modal");
    const passwordAuthModal = document.getElementById("password-auth-modal");
    const passwordInput = document.getElementById("cfg-password-input");
    const passwordErrorMsg = document.getElementById("password-error-msg");
    const togglePasswordBtn = document.getElementById("btn-toggle-password-visibility");

    function resetPasswordModalState() {
        passwordInput.value = "";
        passwordInput.type = "password";
        passwordErrorMsg.style.display = "none";
        passwordAuthModal.querySelector(".modal-container").classList.remove("shake");
        if (togglePasswordBtn) {
            const eyeOpen = togglePasswordBtn.querySelector(".eye-icon-open");
            const eyeClose = togglePasswordBtn.querySelector(".eye-icon-close");
            if (eyeOpen) eyeOpen.style.display = "block";
            if (eyeClose) eyeClose.style.display = "none";
        }
    }
    
    document.getElementById("btn-settings-toggle").addEventListener("click", () => {
        resetPasswordModalState();
        passwordAuthModal.classList.add("active");
        setTimeout(() => passwordInput.focus(), 150);
    });
    
    const editTeacherBtn = document.getElementById("btn-edit-teacher-intro");
    if (editTeacherBtn) {
        editTeacherBtn.addEventListener("click", () => {
            resetPasswordModalState();
            passwordAuthModal.classList.add("active");
            setTimeout(() => passwordInput.focus(), 150);
        });
    }

    // Toggle password visibility (eye button)
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener("click", () => {
            const eyeOpen = togglePasswordBtn.querySelector(".eye-icon-open");
            const eyeClose = togglePasswordBtn.querySelector(".eye-icon-close");
            
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                if (eyeOpen) eyeOpen.style.display = "none";
                if (eyeClose) eyeClose.style.display = "block";
            } else {
                passwordInput.type = "password";
                if (eyeOpen) eyeOpen.style.display = "block";
                if (eyeClose) eyeClose.style.display = "none";
            }
        });
    }

    document.getElementById("btn-close-settings").addEventListener("click", () => {
        settingsModal.classList.remove("active");
    });
    
    document.getElementById("btn-cancel-settings").addEventListener("click", () => {
        settingsModal.classList.remove("active");
    });

    // ปิดโมดอลเมื่อคลิกนอกพื้นที่ตู้คอนเทนเนอร์
    settingsModal.addEventListener("click", (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove("active");
        }
    });

    // Password Modal Events
    document.getElementById("btn-close-password-auth").addEventListener("click", () => {
        passwordAuthModal.classList.remove("active");
    });
    document.getElementById("btn-cancel-password-auth").addEventListener("click", () => {
        passwordAuthModal.classList.remove("active");
    });
    passwordAuthModal.addEventListener("click", (e) => {
        if (e.target === passwordAuthModal) {
            passwordAuthModal.classList.remove("active");
        }
    });

    function verifyPassword() {
        const entered = passwordInput.value;
        const correctPassword = appSettings.teacherPassword || "5018";
        
        if (entered === correctPassword) {
            passwordAuthModal.classList.remove("active");
            settingsModal.classList.add("active");
        } else {
            passwordErrorMsg.style.display = "block";
            const container = passwordAuthModal.querySelector(".modal-container");
            container.classList.remove("shake");
            void container.offsetWidth; // Trigger reflow
            container.classList.add("shake");
            passwordInput.value = "";
            passwordInput.focus();
        }
    }

    document.getElementById("btn-submit-password-auth").addEventListener("click", verifyPassword);
    passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            verifyPassword();
        }
    });

    // 9.9 Settings Form submission
    document.getElementById("settings-form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const teacherName = document.getElementById("cfg-teacher-name").value;
        const schoolName = document.getElementById("cfg-school-name").value;
        const subjectTitle = document.getElementById("cfg-subject-title").value;
        const welcomeText = document.getElementById("cfg-welcome-text").value;

        saveSettings({
            teacherName,
            schoolName,
            subjectTitle,
            welcomeText
        });

        settingsModal.classList.remove("active");
        alert("บันทึกการตั้งค่าคุณครูและเปิดใช้งานเรียบร้อยแล้ว!");
    });

    // 9.9.1 Password change submission
    const submitChangePwBtn = document.getElementById("btn-submit-change-password");
    if (submitChangePwBtn) {
        submitChangePwBtn.addEventListener("click", () => {
            const oldPwInput = document.getElementById("cfg-old-password");
            const newPwInput = document.getElementById("cfg-new-password");
            const confirmNewPwInput = document.getElementById("cfg-confirm-new-password");
            const statusLabel = document.getElementById("pw-change-status");

            if (!oldPwInput || !newPwInput || !confirmNewPwInput || !statusLabel) return;

            statusLabel.textContent = "";
            statusLabel.style.color = "";

            const oldPw = oldPwInput.value;
            const newPw = newPwInput.value;
            const confirmNewPw = confirmNewPwInput.value;

            // Validate fields
            if (!oldPw || !newPw || !confirmNewPw) {
                statusLabel.textContent = "กรุณากรอกข้อมูลให้ครบถ้วน";
                statusLabel.style.color = "var(--color-danger)";
                return;
            }

            const currentCorrectPw = appSettings.teacherPassword || "5018";
            if (oldPw !== currentCorrectPw) {
                statusLabel.textContent = "รหัสผ่านเดิมไม่ถูกต้อง";
                statusLabel.style.color = "var(--color-danger)";
                return;
            }

            // Validate that new password is a 4-digit number
            if (!/^\d{4}$/.test(newPw)) {
                statusLabel.textContent = "รหัสใหม่ต้องเป็นตัวเลข 4 หลัก";
                statusLabel.style.color = "var(--color-danger)";
                return;
            }

            if (newPw !== confirmNewPw) {
                statusLabel.textContent = "รหัสใหม่สองช่องไม่ตรงกัน";
                statusLabel.style.color = "var(--color-danger)";
                return;
            }

            // Success, save new password
            appSettings.teacherPassword = newPw;
            localStorage.setItem("buddhist_holidays_settings", JSON.stringify(appSettings));

            statusLabel.textContent = "เปลี่ยนรหัสผ่านสำเร็จ!";
            statusLabel.style.color = "var(--color-success)";

            // Clear inputs
            oldPwInput.value = "";
            newPwInput.value = "";
            confirmNewPwInput.value = "";
        });
    }

    // 9.10 Reset all settings
    document.getElementById("btn-reset-all-settings").addEventListener("click", async () => {
        if (confirm("คุณต้องการล้างข้อมูลการปรับแต่งทั้งหมดและกลับไปใช้ข้อมูลผู้สอน/ใบความรู้และรูปภาพมาตรฐานใช่หรือไม่? (การอัปโหลดไฟล์ PDF และรูปภาพส่วนตัวทั้งหมดจะถูกลบไปด้วย)")) {
            localStorage.removeItem("buddhist_holidays_settings");
            await clearAllCustomPDFs();
            alert("รีเซ็ตระบบทั้งหมดเรียบร้อยแล้ว กำลังโหลดหน้าใหม่...");
            window.location.reload();
        }
    });

    // 9.11 Customizer File pickers inside Settings Modal
    setupSettingsImageUploads();
    setupSettingsPDFUploads();
    setupSettingsWorksheetImageUploads();
}

// ==========================================================================
// 10. FILE UPLOADS LOGIC FOR TEACHER SETTINGS MODAL
// ==========================================================================
// ฟังก์ชันย่อขนาดภาพและบีบอัดไฟล์เพื่อให้ประหยัดเนื้อที่ของ LocalStorage ป้องกัน QuotaExceededError
function compressAndSaveImage(file, maxW, maxH, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;

            // คำนวณสัดส่วนรูปภาพใหม่
            if (width > maxW) {
                height = Math.round((height * maxW) / width);
                width = maxW;
            }
            if (height > maxH) {
                width = Math.round((width * maxH) / height);
                height = maxH;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            // บีบอัดรูปภาพเป็นชนิด JPEG คุณภาพ 0.82
            const base64 = canvas.toDataURL("image/jpeg", 0.82);
            callback(base64);
        };
        img.onerror = function() {
            alert("เกิดข้อผิดพลาดในการโหลดรูปภาพเข้า Canvas");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ==========================================================================
// 10. FILE UPLOADS LOGIC FOR TEACHER SETTINGS MODAL
// ==========================================================================
function setupSettingsImageUploads() {
    // 1. รูปถ่ายคุณครู (สัดส่วนแนวตั้ง 3:4 ปรับขนาดกว้างไม่เกิน 300px)
    const avatarPicker = document.getElementById("cfg-teacher-avatar-picker");
    avatarPicker.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            compressAndSaveImage(file, 300, 400, (base64) => {
                document.getElementById("preview-teacher-img").querySelector("img").src = base64;
                saveSettings({ teacherAvatar: base64 });
            });
        }
    });

    // 2. โลโก้วิชา (สี่เหลี่ยมจัตุรัส ปรับขนาดไม่เกิน 180px)
    const logoPicker = document.getElementById("cfg-logo-picker");
    logoPicker.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            compressAndSaveImage(file, 180, 180, (base64) => {
                const logoPreview = document.getElementById("preview-logo-img");
                logoPreview.innerHTML = `<img src="${base64}" alt="โลโก้วิชา">`;
                saveSettings({ logoImg: base64 });
            });
        }
    });

    // 3. แบนเนอร์หัวเว็บ (ปรับขนาดกว้างไม่เกิน 1000px)
    const bannerPicker = document.getElementById("cfg-banner-picker");
    bannerPicker.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            compressAndSaveImage(file, 1000, 300, (base64) => {
                document.getElementById("preview-banner-img").querySelector("img").src = base64;
                saveSettings({ bannerImg: base64 });
            });
        }
    });

    // 4. อัปโหลดรูปปกของ 6 วันสำคัญ
    const holidayImgPickers = document.querySelectorAll(".cfg-holiday-img-picker");
    holidayImgPickers.forEach(picker => {
        picker.addEventListener("change", (e) => {
            const idx = parseInt(picker.getAttribute("data-idx"));
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                // บีบอัดและย่อรูปภาพให้เหมาะกับ LocalStorage (ขนาดกว้างสูงสุด 500px, สูงสุด 330px)
                compressAndSaveImage(file, 500, 330, (base64) => {
                    const settingsToSave = {};
                    settingsToSave[`holiday_${idx}_img`] = base64;
                    saveSettings(settingsToSave);
                    // รีโหลดหน้าหลักการ์ดเพื่อให้ภาพอัปเดตแบบเรียลไทม์
                    renderHolidaysGrid();
                });
            }
        });
    });

    // 5. ปุ่มรีเซ็ตรูปปกของ 6 วันสำคัญ
    const holidayImgResetBtns = document.querySelectorAll(".btn-reset-holiday-img");
    holidayImgResetBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-idx"));
            if (confirm(`คุณต้องการลบรูปภาพปกและสลับกลับไปใช้รูปภาพเริ่มต้นสำหรับ ${HOLIDAYS_DATA[idx].title} ใช่หรือไม่?`)) {
                const settingsToSave = {};
                settingsToSave[`holiday_${idx}_img`] = "";
                saveSettings(settingsToSave);
                // รีโหลดหน้าหลักการ์ดเพื่อให้ภาพอัปเดตแบบเรียลไทม์
                renderHolidaysGrid();
            }
        });
    });
}

function setupSettingsPDFUploads() {
    // ระบบเลือกอัปโหลดไฟล์ PDF จากแผงควบคุมหลักในโมดอล
    const pdfPickers = document.querySelectorAll(".cfg-pdf-picker");
    pdfPickers.forEach(picker => {
        picker.addEventListener("change", async (e) => {
            const idx = parseInt(picker.getAttribute("data-idx"));
            if (e.target.files.length > 0) {
                await handlePDFUpload(e.target.files[0], idx);
            }
        });
    });

    // ปุ่มรีเซ็ต PDF รายตัว
    const resetButtons = document.querySelectorAll(".btn-reset-pdf");
    resetButtons.forEach(btn => {
        btn.addEventListener("click", async () => {
            const idx = parseInt(btn.getAttribute("data-idx"));
            if (confirm(`คุณต้องการลบไฟล์ PDF ที่อัปโหลดและสลับกลับไปใช้ใบความรู้มาตรฐานสำหรับวันสำคัญนี้ใช่หรือไม่?`)) {
                if (useCloudMode) {
                    try {
                        const res = await fetch("/api/upload", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": appSettings.teacherPassword || "5018"
                            },
                            body: JSON.stringify({ key: `pdf_${idx}`, data: null })
                        });
                        if (!res.ok) throw new Error("Delete failed");
                        const updateObj = {};
                        updateObj[`hasCustomPDF_${idx}`] = false;
                        await saveSettings(updateObj);
                    } catch (err) {
                        alert("ลบไฟล์ไม่สำเร็จ: " + err.message);
                        return;
                    }
                } else {
                    await deleteCustomPDF(idx);
                }
                
                await updateModalPDFStatuses();
                
                // รีโหลดใบงานถ้าเรากำลังดูหน้านั้นอยู่
                const activeView = document.getElementById("content-view");
                if (activeView.classList.contains("active") && currentHolidayIndex === idx) {
                    await loadPDFViewer(idx);
                }
            }
        });
    });
}

async function handlePDFUpload(file, holidayIdx) {
    if (file.type !== "application/pdf") {
        alert("กรุณาเลือกเฉพาะไฟล์สกุล PDF (.pdf) เท่านั้น");
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert("ไฟล์ PDF มีขนาดใหญ่เกินไป (จำกัดสูงสุดไม่เกิน 5MB) กรุณาใช้ไฟล์บีบอัดขนาดเพื่อประสิทธิภาพที่ดียิ่งขึ้น");
        return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
        const base64 = event.target.result;
        try {
            if (useCloudMode) {
                const response = await fetch("/api/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": appSettings.teacherPassword || "5018"
                    },
                    body: JSON.stringify({
                        key: `pdf_${holidayIdx}`,
                        data: base64
                    })
                });
                if (!response.ok) {
                    const errJson = await response.json();
                    throw new Error(errJson.error || "Upload failed");
                }
                const updatedSettings = {};
                updatedSettings[`hasCustomPDF_${holidayIdx}`] = true;
                await saveSettings(updatedSettings);
            } else {
                await saveCustomPDF(holidayIdx, base64);
            }

            await updateModalPDFStatuses();
            
            // รีโหลดทันทีหากเปิดดูหน้านั้นอยู่
            const activeView = document.getElementById("content-view");
            if (activeView.classList.contains("active") && currentHolidayIndex === holidayIdx) {
                await loadPDFViewer(holidayIdx);
            }

            alert(`อัปโหลดไฟล์ PDF สำหรับ ${HOLIDAYS_DATA[holidayIdx].title} สำเร็จ!`);
        } catch (err) {
            console.error(err);
            alert("เกิดข้อผิดพลาดในการบันทึกไฟล์: " + err.message);
        }
    };
    reader.readAsDataURL(file);
}

function setupSettingsWorksheetImageUploads() {
    // ระบบเลือกอัปโหลดไฟล์รูปภาพใบความรู้จากแผงควบคุมหลักในโมดอล
    const imgPickers = document.querySelectorAll(".cfg-worksheet-img-picker");
    imgPickers.forEach(picker => {
        picker.addEventListener("change", async (e) => {
            const idx = parseInt(picker.getAttribute("data-idx"));
            if (e.target.files.length > 0) {
                await handleWorksheetImageUpload(e.target.files[0], idx);
            }
        });
    });

    // ปุ่มรีเซ็ตรูปภาพใบความรู้รายตัว
    const resetButtons = document.querySelectorAll(".btn-reset-worksheet-img");
    resetButtons.forEach(btn => {
        btn.addEventListener("click", async () => {
            const idx = parseInt(btn.getAttribute("data-idx"));
            if (confirm(`คุณต้องการลบรูปภาพใบความรู้ที่อัปโหลดและสลับกลับไปใช้รูปภาพเริ่มต้นสำหรับวันสำคัญนี้ใช่หรือไม่?`)) {
                if (useCloudMode) {
                    try {
                        const res = await fetch("/api/upload", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": appSettings.teacherPassword || "5018"
                            },
                            body: JSON.stringify({ key: `img_${idx}`, data: null })
                        });
                        if (!res.ok) throw new Error("Delete failed");
                        const updateObj = {};
                        updateObj[`hasCustomWorksheetImg_${idx}`] = false;
                        await saveSettings(updateObj);
                    } catch (err) {
                        alert("ลบไฟล์ไม่สำเร็จ: " + err.message);
                        return;
                    }
                } else {
                    await deleteCustomWorksheetImage(idx);
                }
                
                await updateModalWorksheetImageStatuses();
                
                // รีโหลดทันทีถ้าเรากำลังดูหน้านั้นอยู่
                const activeView = document.getElementById("content-view");
                if (activeView.classList.contains("active") && currentHolidayIndex === idx) {
                    await loadPDFViewer(idx);
                }
            }
        });
    });
}

async function handleWorksheetImageUpload(file, holidayIdx) {
    if (!file.type.startsWith("image/")) {
        alert("กรุณาเลือกเฉพาะไฟล์รูปภาพ (PNG, JPG, JPEG) เท่านั้น");
        return;
    }

    // เพื่อให้อ่านง่ายเมื่อซูม ย่อรูปภาพให้มีความกว้างสูงสุด 1200px และความสูงสูงสุด 1800px
    compressAndSaveImage(file, 1200, 1800, async (base64) => {
        try {
            if (useCloudMode) {
                const response = await fetch("/api/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": appSettings.teacherPassword || "5018"
                    },
                    body: JSON.stringify({
                        key: `img_${holidayIdx}`,
                        data: base64
                    })
                });
                if (!response.ok) {
                    const errJson = await response.json();
                    throw new Error(errJson.error || "Upload failed");
                }
                const updatedSettings = {};
                updatedSettings[`hasCustomWorksheetImg_${holidayIdx}`] = true;
                await saveSettings(updatedSettings);
            } else {
                await saveCustomWorksheetImage(holidayIdx, base64);
            }

            await updateModalWorksheetImageStatuses();
            
            // รีโหลดทันทีหากเปิดดูหน้านั้นอยู่
            const activeView = document.getElementById("content-view");
            if (activeView.classList.contains("active") && currentHolidayIndex === holidayIdx) {
                await loadPDFViewer(holidayIdx);
            }
            alert(`อัปโหลดรูปภาพใบความรู้สำหรับ ${HOLIDAYS_DATA[holidayIdx].title} สำเร็จ!`);
        } catch (err) {
            console.error(err);
            alert("เกิดข้อผิดพลาดในการบันทึกไฟล์รูปภาพ: " + err.message);
        }
    });
}

// ==========================================================================
// 11. DOWNLOAD & PRINTING LOGIC FOR WORKSHEETS
// ==========================================================================
async function downloadPDFWorksheet() {
    const holidayIdx = currentHolidayIndex;
    const data = HOLIDAYS_DATA[holidayIdx];

    const link = document.createElement("a");
    if (useCloudMode) {
        if (appSettings[`hasCustomPDF_${holidayIdx}`]) {
            link.href = `/api/file?key=pdf_${holidayIdx}`;
            link.download = `${data.title}_ใบความรู้ครูผู้สอน.pdf`;
        } else {
            link.href = getDefaultPDFPath(holidayIdx);
            link.download = `${data.title}.pdf`;
        }
    } else {
        const customPDFBase64 = await getCustomPDF(holidayIdx);
        if (customPDFBase64) {
            link.href = customPDFBase64;
            link.download = `${data.title}_ใบความรู้ครูผู้สอน.pdf`;
        } else {
            link.href = getDefaultPDFPath(holidayIdx);
            link.download = `${data.title}.pdf`;
        }
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function triggerPDFPrint() {
    window.print();
}
