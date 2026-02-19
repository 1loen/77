// Database bài học - Thêm bài mới bằng cách copy và chỉnh sửa
export const LESSON_DATABASE = [
    {
        id: 1,
        title: "Lesson 1",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi thức dậy lúc sáu giờ sáng. Tôi mở mắt và nhìn lên trần nhà. Tôi cảm thấy hơi buồn ngủ nhưng cũng rất thoải mái...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi thức dậy lúc sáu giờ sáng.",
                en_best: "Today I woke up at six in the morning.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I woke up", vi: "tôi thức dậy" },
                    { en: "at six in the morning", vi: "lúc sáu giờ sáng" }
                ]
            },
            {
                vi: "Tôi mở mắt và nhìn lên trần nhà.",
                en_best: "I opened my eyes and looked at the ceiling.",
                phrases: [
                    { en: "I opened my eyes", vi: "Tôi mở mắt" },
                    { en: "and looked at", vi: "và nhìn lên" },
                    { en: "the ceiling", vi: "trần nhà" }
                ]
            },
            {
                vi: "Tôi cảm thấy hơi buồn ngủ nhưng cũng rất thoải mái.",
                en_best: "I felt a bit sleepy but also very comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "a bit sleepy", vi: "hơi buồn ngủ" },
                    { en: "but also very comfortable", vi: "nhưng cũng rất thoải mái" }
                ]
            },
            {
                vi: "Tôi rời khỏi giường và đi rửa mặt.",
                en_best: "I got out of bed and went to wash my face.",
                phrases: [
                    { en: "I got out of bed", vi: "Tôi rời khỏi giường" },
                    { en: "and went to", vi: "và đi" },
                    { en: "wash my face", vi: "rửa mặt" }
                ]
            },
            {
                vi: "Tôi đánh răng và chải tóc.",
                en_best: "I brushed my teeth and combed my hair.",
                phrases: [
                    { en: "I brushed my teeth", vi: "Tôi đánh răng" },
                    { en: "and combed", vi: "và chải" },
                    { en: "my hair", vi: "tóc" }
                ]
            },
            {
                vi: "Sau đó tôi vào bếp và chuẩn bị bữa sáng.",
                en_best: "Then I went to the kitchen and prepared breakfast.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went to the kitchen", vi: "tôi vào bếp" },
                    { en: "and prepared breakfast", vi: "và chuẩn bị bữa sáng" }
                ]
            },
            {
                vi: "Tôi ăn bánh mì và uống một ly sữa ấm.",
                en_best: "I ate bread and drank a glass of warm milk.",
                phrases: [
                    { en: "I ate", vi: "Tôi ăn" },
                    { en: "bread", vi: "bánh mì" },
                    { en: "and drank a glass of warm milk", vi: "và uống một ly sữa ấm" }
                ]
            },
            {
                vi: "Tôi ngồi yên lặng và nhìn ra cửa sổ.",
                en_best: "I sat quietly and looked out the window.",
                phrases: [
                    { en: "I sat quietly", vi: "Tôi ngồi yên lặng" },
                    { en: "and looked out", vi: "và nhìn ra" },
                    { en: "the window", vi: "cửa sổ" }
                ]
            },
            {
                vi: "Bầu trời hôm nay rất xanh.",
                en_best: "The sky today is very blue.",
                phrases: [
                    { en: "The sky", vi: "Bầu trời" },
                    { en: "today", vi: "hôm nay" },
                    { en: "is very blue", vi: "rất xanh" }
                ]
            },
            {
                vi: "Tôi nghe tiếng chim hót bên ngoài.",
                en_best: "I heard birds singing outside.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "birds singing", vi: "tiếng chim hót" },
                    { en: "outside", vi: "bên ngoài" }
                ]
            },
            {
                vi: "Không khí buổi sáng rất mát và dễ chịu.",
                en_best: "The morning air is very cool and pleasant.",
                phrases: [
                    { en: "The morning air", vi: "Không khí buổi sáng" },
                    { en: "is very cool", vi: "rất mát" },
                    { en: "and pleasant", vi: "và dễ chịu" }
                ]
            },
            {
                vi: "Tôi cảm thấy tâm trạng tốt hơn.",
                en_best: "I felt in a better mood.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "in a better mood", vi: "tâm trạng tốt hơn" }
                ]
            },
            {
                vi: "Tôi nghĩ về những việc tôi muốn làm hôm nay.",
                en_best: "I thought about the things I wanted to do today.",
                phrases: [
                    { en: "I thought about", vi: "Tôi nghĩ về" },
                    { en: "the things", vi: "những việc" },
                    { en: "I wanted to do", vi: "tôi muốn làm" }
                ]
            },
            {
                vi: "Tôi muốn học tiếng Anh, làm việc và dọn dẹp phòng.",
                en_best: "I wanted to study English, work, and clean my room.",
                phrases: [
                    { en: "I wanted to", vi: "Tôi muốn" },
                    { en: "study English", vi: "học tiếng Anh" },
                    { en: "work", vi: "làm việc" },
                    { en: "and clean my room", vi: "và dọn dẹp phòng" }
                ]
            },
            {
                vi: "Tôi cũng muốn gọi điện cho bạn của tôi.",
                en_best: "I also wanted to call my friend.",
                phrases: [
                    { en: "I also wanted to", vi: "Tôi cũng muốn" },
                    { en: "call", vi: "gọi điện" },
                    { en: "my friend", vi: "bạn của tôi" }
                ]
            },
            {
                vi: "Tôi thích những buổi sáng yên tĩnh như thế này.",
                en_best: "I like quiet mornings like this.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "quiet mornings", vi: "những buổi sáng yên tĩnh" },
                    { en: "like this", vi: "như thế này" }
                ]
            },
            {
                vi: "Tôi muốn hôm nay là một ngày tốt.",
                en_best: "I wanted today to be a good day.",
                phrases: [
                    { en: "I wanted", vi: "Tôi muốn" },
                    { en: "today", vi: "hôm nay" },
                    { en: "to be a good day", vi: "là một ngày tốt" }
                ]
            },
            {
                vi: "Sau bữa sáng, tôi thay quần áo và chuẩn bị ra ngoài.",
                en_best: "After breakfast, I changed clothes and got ready to go out.",
                phrases: [
                    { en: "After breakfast", vi: "Sau bữa sáng" },
                    { en: "I changed clothes", vi: "tôi thay quần áo" },
                    { en: "and got ready", vi: "và chuẩn bị" }
                ]
            },
            {
                vi: "Tôi kiểm tra điện thoại và mang theo túi.",
                en_best: "I checked my phone and took my bag.",
                phrases: [
                    { en: "I checked", vi: "Tôi kiểm tra" },
                    { en: "my phone", vi: "điện thoại" },
                    { en: "and took my bag", vi: "và mang theo túi" }
                ]
            },
            {
                vi: "Tôi khóa cửa và bước ra đường.",
                en_best: "I locked the door and went out to the street.",
                phrases: [
                    { en: "I locked the door", vi: "Tôi khóa cửa" },
                    { en: "and went out", vi: "và bước ra" },
                    { en: "to the street", vi: "ra đường" }
                ]
            },
            {
                vi: "Mọi thứ rất yên bình.",
                en_best: "Everything was very peaceful.",
                phrases: [
                    { en: "Everything", vi: "Mọi thứ" },
                    { en: "was very peaceful", vi: "rất yên bình" }
                ]
            },
            {
                vi: "Tôi mỉm cười và bắt đầu ngày mới.",
                en_best: "I smiled and started a new day.",
                phrases: [
                    { en: "I smiled", vi: "Tôi mỉm cười" },
                    { en: "and started", vi: "và bắt đầu" },
                    { en: "a new day", vi: "ngày mới" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Lesson 2",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi sáng tôi thức dậy lúc bảy giờ. Tôi vẫn còn hơi buồn ngủ. Tôi ngồi dậy và duỗi người. Sau đó tôi đi vào phòng tắm...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi sáng tôi thức dậy lúc bảy giờ.",
                en_best: "In the morning I woke up at seven o'clock.",
                phrases: [
                    { en: "In the morning", vi: "Buổi sáng" },
                    { en: "I woke up", vi: "tôi thức dậy" },
                    { en: "at seven o'clock", vi: "lúc bảy giờ" }
                ]
            },
            {
                vi: "Tôi vẫn còn hơi buồn ngủ.",
                en_best: "I was still a bit sleepy.",
                phrases: [
                    { en: "I was still", vi: "Tôi vẫn còn" },
                    { en: "a bit sleepy", vi: "hơi buồn ngủ" }
                ]
            },
            {
                vi: "Tôi ngồi dậy và duỗi người.",
                en_best: "I sat up and stretched.",
                phrases: [
                    { en: "I sat up", vi: "Tôi ngồi dậy" },
                    { en: "and stretched", vi: "và duỗi người" }
                ]
            },
            {
                vi: "Sau đó tôi đi vào phòng tắm.",
                en_best: "Then I went into the bathroom.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went into", vi: "tôi đi vào" },
                    { en: "the bathroom", vi: "phòng tắm" }
                ]
            },
            {
                vi: "Tôi rửa mặt và đánh răng.",
                en_best: "I washed my face and brushed my teeth.",
                phrases: [
                    { en: "I washed my face", vi: "Tôi rửa mặt" },
                    { en: "and brushed my teeth", vi: "và đánh răng" }
                ]
            },
            {
                vi: "Tôi nhìn vào gương và mỉm cười.",
                en_best: "I looked in the mirror and smiled.",
                phrases: [
                    { en: "I looked in", vi: "Tôi nhìn vào" },
                    { en: "the mirror", vi: "gương" },
                    { en: "and smiled", vi: "và mỉm cười" }
                ]
            },
            {
                vi: "Tôi thay quần áo sạch.",
                en_best: "I changed into clean clothes.",
                phrases: [
                    { en: "I changed into", vi: "Tôi thay" },
                    { en: "clean clothes", vi: "quần áo sạch" }
                ]
            },
            {
                vi: "Tôi đi vào bếp và nấu nước nóng.",
                en_best: "I went into the kitchen and boiled water.",
                phrases: [
                    { en: "I went into", vi: "Tôi đi vào" },
                    { en: "the kitchen", vi: "bếp" },
                    { en: "and boiled water", vi: "và nấu nước nóng" }
                ]
            },
            {
                vi: "Tôi pha một tách trà và ăn bánh mì.",
                en_best: "I made a cup of tea and ate bread.",
                phrases: [
                    { en: "I made", vi: "Tôi pha" },
                    { en: "a cup of tea", vi: "một tách trà" },
                    { en: "and ate bread", vi: "và ăn bánh mì" }
                ]
            },
            {
                vi: "Tôi ngồi xuống ghế và uống trà chậm rãi.",
                en_best: "I sat down on a chair and drank tea slowly.",
                phrases: [
                    { en: "I sat down", vi: "Tôi ngồi xuống" },
                    { en: "on a chair", vi: "trên ghế" },
                    { en: "and drank tea slowly", vi: "và uống trà chậm rãi" }
                ]
            },
            {
                vi: "Tôi nghe tiếng xe ngoài đường.",
                en_best: "I heard the sound of cars outside.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "the sound of cars", vi: "tiếng xe" },
                    { en: "outside", vi: "ngoài đường" }
                ]
            },
            {
                vi: "Thành phố bắt đầu bận rộn.",
                en_best: "The city began to get busy.",
                phrases: [
                    { en: "The city", vi: "Thành phố" },
                    { en: "began to get", vi: "bắt đầu" },
                    { en: "busy", vi: "bận rộn" }
                ]
            },
            {
                vi: "Tôi kiểm tra điện thoại và xem giờ.",
                en_best: "I checked my phone and looked at the time.",
                phrases: [
                    { en: "I checked", vi: "Tôi kiểm tra" },
                    { en: "my phone", vi: "điện thoại" },
                    { en: "and looked at the time", vi: "và xem giờ" }
                ]
            },
            {
                vi: "Tôi chuẩn bị túi và giày.",
                en_best: "I prepared my bag and shoes.",
                phrases: [
                    { en: "I prepared", vi: "Tôi chuẩn bị" },
                    { en: "my bag", vi: "túi" },
                    { en: "and shoes", vi: "và giày" }
                ]
            },
            {
                vi: "Tôi cảm thấy sẵn sàng cho ngày hôm nay.",
                en_best: "I felt ready for today.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "ready", vi: "sẵn sàng" },
                    { en: "for today", vi: "cho ngày hôm nay" }
                ]
            },
            {
                vi: "Tôi mở cửa và đi ra ngoài.",
                en_best: "I opened the door and went outside.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "the door", vi: "cửa" },
                    { en: "and went outside", vi: "và đi ra ngoài" }
                ]
            },
            {
                vi: "Không khí buổi sáng rất mát.",
                en_best: "The morning air was very cool.",
                phrases: [
                    { en: "The morning air", vi: "Không khí buổi sáng" },
                    { en: "was very cool", vi: "rất mát" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Lesson 3",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi chiều tôi trở về nhà sau khi làm việc. Tôi đặt túi xuống bàn và ngồi nghỉ. Tôi cảm thấy hơi mệt nhưng thoải mái...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi chiều tôi trở về nhà sau khi làm việc.",
                en_best: "In the afternoon I came back home after work.",
                phrases: [
                    { en: "In the afternoon", vi: "Buổi chiều" },
                    { en: "I came back home", vi: "tôi trở về nhà" },
                    { en: "after work", vi: "sau khi làm việc" }
                ]
            },
            {
                vi: "Tôi đặt túi xuống bàn và ngồi nghỉ.",
                en_best: "I put my bag on the table and sat down to rest.",
                phrases: [
                    { en: "I put my bag", vi: "Tôi đặt túi" },
                    { en: "on the table", vi: "xuống bàn" },
                    { en: "and sat down to rest", vi: "và ngồi nghỉ" }
                ]
            },
            {
                vi: "Tôi cảm thấy hơi mệt nhưng thoải mái.",
                en_best: "I felt a bit tired but comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "a bit tired", vi: "hơi mệt" },
                    { en: "but comfortable", vi: "nhưng thoải mái" }
                ]
            },
            {
                vi: "Tôi uống một ly nước lạnh.",
                en_best: "I drank a glass of cold water.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "a glass of cold water", vi: "một ly nước lạnh" }
                ]
            },
            {
                vi: "Sau đó tôi mở cửa sổ.",
                en_best: "Then I opened the window.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I opened", vi: "tôi mở" },
                    { en: "the window", vi: "cửa sổ" }
                ]
            },
            {
                vi: "Gió nhẹ thổi vào phòng.",
                en_best: "A gentle breeze blew into the room.",
                phrases: [
                    { en: "A gentle breeze", vi: "Gió nhẹ" },
                    { en: "blew into", vi: "thổi vào" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi nghe tiếng chim và tiếng người nói chuyện bên ngoài.",
                en_best: "I heard birds and the sound of people talking outside.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "birds", vi: "tiếng chim" },
                    { en: "and people talking", vi: "và tiếng người nói chuyện" },
                    { en: "outside", vi: "bên ngoài" }
                ]
            },
            {
                vi: "Tôi đi tắm nước ấm.",
                en_best: "I took a warm bath.",
                phrases: [
                    { en: "I took", vi: "Tôi đi" },
                    { en: "a warm bath", vi: "tắm nước ấm" }
                ]
            },
            {
                vi: "Tôi thay quần áo thoải mái.",
                en_best: "I changed into comfortable clothes.",
                phrases: [
                    { en: "I changed into", vi: "Tôi thay" },
                    { en: "comfortable clothes", vi: "quần áo thoải mái" }
                ]
            },
            {
                vi: "Tôi nằm trên giường một lúc.",
                en_best: "I lay on the bed for a while.",
                phrases: [
                    { en: "I lay", vi: "Tôi nằm" },
                    { en: "on the bed", vi: "trên giường" },
                    { en: "for a while", vi: "một lúc" }
                ]
            },
            {
                vi: "Tôi nhìn lên trần nhà và suy nghĩ.",
                en_best: "I looked at the ceiling and thought.",
                phrases: [
                    { en: "I looked at", vi: "Tôi nhìn lên" },
                    { en: "the ceiling", vi: "trần nhà" },
                    { en: "and thought", vi: "và suy nghĩ" }
                ]
            },
            {
                vi: "Hôm nay không quá bận rộn.",
                en_best: "Today was not too busy.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "was not too busy", vi: "không quá bận rộn" }
                ]
            },
            {
                vi: "Tôi cảm thấy bình yên.",
                en_best: "I felt peaceful.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "peaceful", vi: "bình yên" }
                ]
            },
            {
                vi: "Tôi thích ở nhà và nghỉ ngơi.",
                en_best: "I like being at home and resting.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "being at home", vi: "ở nhà" },
                    { en: "and resting", vi: "và nghỉ ngơi" }
                ]
            },
            {
                vi: "Buổi tối tôi ăn cơm và xem TV một chút.",
                en_best: "In the evening I ate dinner and watched TV a little.",
                phrases: [
                    { en: "In the evening", vi: "Buổi tối" },
                    { en: "I ate dinner", vi: "tôi ăn cơm" },
                    { en: "and watched TV", vi: "và xem TV" },
                    { en: "a little", vi: "một chút" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Lesson 4",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi không đi làm. Tôi thức dậy muộn hơn bình thường. Tôi nằm trên giường và nghe tiếng gió...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi không đi làm.",
                en_best: "Today I didn't go to work.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I didn't go", vi: "tôi không đi" },
                    { en: "to work", vi: "làm việc" }
                ]
            },
            {
                vi: "Tôi thức dậy muộn hơn bình thường.",
                en_best: "I woke up later than usual.",
                phrases: [
                    { en: "I woke up", vi: "Tôi thức dậy" },
                    { en: "later", vi: "muộn hơn" },
                    { en: "than usual", vi: "bình thường" }
                ]
            },
            {
                vi: "Tôi nằm trên giường và nghe tiếng gió.",
                en_best: "I lay on the bed and listened to the wind.",
                phrases: [
                    { en: "I lay", vi: "Tôi nằm" },
                    { en: "on the bed", vi: "trên giường" },
                    { en: "and listened to", vi: "và nghe" },
                    { en: "the wind", vi: "tiếng gió" }
                ]
            },
            {
                vi: "Sau đó tôi dậy và mở cửa sổ.",
                en_best: "Then I got up and opened the window.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I got up", vi: "tôi dậy" },
                    { en: "and opened", vi: "và mở" },
                    { en: "the window", vi: "cửa sổ" }
                ]
            },
            {
                vi: "Ánh nắng chiếu vào phòng.",
                en_best: "Sunlight shone into the room.",
                phrases: [
                    { en: "Sunlight", vi: "Ánh nắng" },
                    { en: "shone into", vi: "chiếu vào" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi hít thở sâu và cảm thấy dễ chịu.",
                en_best: "I took a deep breath and felt comfortable.",
                phrases: [
                    { en: "I took a deep breath", vi: "Tôi hít thở sâu" },
                    { en: "and felt", vi: "và cảm thấy" },
                    { en: "comfortable", vi: "dễ chịu" }
                ]
            },
            {
                vi: "Tôi dọn giường và gấp chăn.",
                en_best: "I made the bed and folded the blanket.",
                phrases: [
                    { en: "I made the bed", vi: "Tôi dọn giường" },
                    { en: "and folded", vi: "và gấp" },
                    { en: "the blanket", vi: "chăn" }
                ]
            },
            {
                vi: "Tôi lau bàn và sắp xếp đồ đạc.",
                en_best: "I cleaned the table and arranged things.",
                phrases: [
                    { en: "I cleaned", vi: "Tôi lau" },
                    { en: "the table", vi: "bàn" },
                    { en: "and arranged", vi: "và sắp xếp" },
                    { en: "things", vi: "đồ đạc" }
                ]
            },
            {
                vi: "Tôi bật nhạc nhẹ và nghe.",
                en_best: "I turned on soft music and listened.",
                phrases: [
                    { en: "I turned on", vi: "Tôi bật" },
                    { en: "soft music", vi: "nhạc nhẹ" },
                    { en: "and listened", vi: "và nghe" }
                ]
            },
            {
                vi: "Tôi hát nhỏ theo bài hát.",
                en_best: "I sang along softly with the song.",
                phrases: [
                    { en: "I sang along", vi: "Tôi hát theo" },
                    { en: "softly", vi: "nhỏ" },
                    { en: "with the song", vi: "bài hát" }
                ]
            },
            {
                vi: "Tôi cảm thấy vui hơn.",
                en_best: "I felt happier.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "happier", vi: "vui hơn" }
                ]
            },
            {
                vi: "Tôi nhắn tin cho bạn tôi và hỏi thăm.",
                en_best: "I sent a message to my friend and asked how they were.",
                phrases: [
                    { en: "I sent", vi: "Tôi nhắn" },
                    { en: "a message", vi: "tin" },
                    { en: "to my friend", vi: "cho bạn tôi" },
                    { en: "and asked how they were", vi: "và hỏi thăm" }
                ]
            },
            {
                vi: "Chúng tôi nói chuyện một lúc.",
                en_best: "We talked for a while.",
                phrases: [
                    { en: "We", vi: "Chúng tôi" },
                    { en: "talked", vi: "nói chuyện" },
                    { en: "for a while", vi: "một lúc" }
                ]
            },
            {
                vi: "Tôi rất vui hôm nay.",
                en_best: "I was very happy today.",
                phrases: [
                    { en: "I was", vi: "Tôi" },
                    { en: "very happy", vi: "rất vui" },
                    { en: "today", vi: "hôm nay" }
                ]
            },
            {
                vi: "Buổi tối tôi xem phim và đi ngủ sớm.",
                en_best: "In the evening I watched a movie and went to bed early.",
                phrases: [
                    { en: "In the evening", vi: "Buổi tối" },
                    { en: "I watched", vi: "tôi xem" },
                    { en: "a movie", vi: "phim" },
                    { en: "and went to bed early", vi: "và đi ngủ sớm" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Lesson 5",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Tối nay tôi ở nhà. Tôi ngồi trên ghế và nghỉ ngơi. Tôi bật đèn và đóng cửa. Tôi pha một ly sữa ấm...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Tối nay tôi ở nhà.",
                en_best: "Tonight I stayed at home.",
                phrases: [
                    { en: "Tonight", vi: "Tối nay" },
                    { en: "I stayed", vi: "tôi ở" },
                    { en: "at home", vi: "nhà" }
                ]
            },
            {
                vi: "Tôi ngồi trên ghế và nghỉ ngơi.",
                en_best: "I sat on a chair and rested.",
                phrases: [
                    { en: "I sat", vi: "Tôi ngồi" },
                    { en: "on a chair", vi: "trên ghế" },
                    { en: "and rested", vi: "và nghỉ ngơi" }
                ]
            },
            {
                vi: "Tôi bật đèn và đóng cửa.",
                en_best: "I turned on the light and closed the door.",
                phrases: [
                    { en: "I turned on", vi: "Tôi bật" },
                    { en: "the light", vi: "đèn" },
                    { en: "and closed", vi: "và đóng" },
                    { en: "the door", vi: "cửa" }
                ]
            },
            {
                vi: "Tôi pha một ly sữa ấm.",
                en_best: "I made a glass of warm milk.",
                phrases: [
                    { en: "I made", vi: "Tôi pha" },
                    { en: "a glass", vi: "một ly" },
                    { en: "of warm milk", vi: "sữa ấm" }
                ]
            },
            {
                vi: "Tôi uống chậm và nhìn quanh phòng.",
                en_best: "I drank slowly and looked around the room.",
                phrases: [
                    { en: "I drank slowly", vi: "Tôi uống chậm" },
                    { en: "and looked around", vi: "và nhìn quanh" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Mọi thứ rất yên tĩnh.",
                en_best: "Everything was very quiet.",
                phrases: [
                    { en: "Everything", vi: "Mọi thứ" },
                    { en: "was very quiet", vi: "rất yên tĩnh" }
                ]
            },
            {
                vi: "Tôi mở điện thoại và nghe nhạc nhẹ.",
                en_best: "I opened my phone and listened to soft music.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "my phone", vi: "điện thoại" },
                    { en: "and listened to", vi: "và nghe" },
                    { en: "soft music", vi: "nhạc nhẹ" }
                ]
            },
            {
                vi: "Tôi cảm thấy thư giãn.",
                en_best: "I felt relaxed.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "relaxed", vi: "thư giãn" }
                ]
            },
            {
                vi: "Tôi nghĩ về ngày hôm nay.",
                en_best: "I thought about today.",
                phrases: [
                    { en: "I thought about", vi: "Tôi nghĩ về" },
                    { en: "today", vi: "ngày hôm nay" }
                ]
            },
            {
                vi: "Hôm nay là một ngày bình thường.",
                en_best: "Today was an ordinary day.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "was an ordinary day", vi: "là một ngày bình thường" }
                ]
            },
            {
                vi: "Không có gì đặc biệt.",
                en_best: "There was nothing special.",
                phrases: [
                    { en: "There was", vi: "Không có" },
                    { en: "nothing special", vi: "gì đặc biệt" }
                ]
            },
            {
                vi: "Nhưng tôi cảm thấy ổn.",
                en_best: "But I felt okay.",
                phrases: [
                    { en: "But", vi: "Nhưng" },
                    { en: "I felt", vi: "tôi cảm thấy" },
                    { en: "okay", vi: "ổn" }
                ]
            },
            {
                vi: "Tôi mỉm cười một mình.",
                en_best: "I smiled to myself.",
                phrases: [
                    { en: "I smiled", vi: "Tôi mỉm cười" },
                    { en: "to myself", vi: "một mình" }
                ]
            },
            {
                vi: "Tôi cảm thấy rất bình yên lúc này.",
                en_best: "I felt very peaceful right now.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "very peaceful", vi: "rất bình yên" },
                    { en: "right now", vi: "lúc này" }
                ]
            },
            {
                vi: "Sau đó tôi tắt đèn và đi ngủ.",
                en_best: "Then I turned off the light and went to sleep.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I turned off", vi: "tôi tắt" },
                    { en: "the light", vi: "đèn" },
                    { en: "and went to sleep", vi: "và đi ngủ" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Lesson 6",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Sáng nay tôi thức dậy sớm. Tôi nghe tiếng chim bên ngoài cửa sổ. Tôi mở mắt và nhìn quanh phòng...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Sáng nay tôi thức dậy sớm.",
                en_best: "This morning I woke up early.",
                phrases: [
                    { en: "This morning", vi: "Sáng nay" },
                    { en: "I woke up", vi: "tôi thức dậy" },
                    { en: "early", vi: "sớm" }
                ]
            },
            {
                vi: "Tôi nghe tiếng chim bên ngoài cửa sổ.",
                en_best: "I heard birds singing outside the window.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "birds singing", vi: "tiếng chim" },
                    { en: "outside the window", vi: "bên ngoài cửa sổ" }
                ]
            },
            {
                vi: "Tôi mở mắt và nhìn quanh phòng.",
                en_best: "I opened my eyes and looked around the room.",
                phrases: [
                    { en: "I opened my eyes", vi: "Tôi mở mắt" },
                    { en: "and looked around", vi: "và nhìn quanh" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Mọi thứ rất yên tĩnh.",
                en_best: "Everything was very quiet.",
                phrases: [
                    { en: "Everything", vi: "Mọi thứ" },
                    { en: "was very quiet", vi: "rất yên tĩnh" }
                ]
            },
            {
                vi: "Tôi rời khỏi giường và đi rửa mặt.",
                en_best: "I got out of bed and went to wash my face.",
                phrases: [
                    { en: "I got out of bed", vi: "Tôi rời khỏi giường" },
                    { en: "and went to", vi: "và đi" },
                    { en: "wash my face", vi: "rửa mặt" }
                ]
            },
            {
                vi: "Nước mát làm tôi tỉnh hơn.",
                en_best: "The cool water made me more awake.",
                phrases: [
                    { en: "The cool water", vi: "Nước mát" },
                    { en: "made me", vi: "làm tôi" },
                    { en: "more awake", vi: "tỉnh hơn" }
                ]
            },
            {
                vi: "Tôi đánh răng và chải tóc.",
                en_best: "I brushed my teeth and combed my hair.",
                phrases: [
                    { en: "I brushed my teeth", vi: "Tôi đánh răng" },
                    { en: "and combed", vi: "và chải" },
                    { en: "my hair", vi: "tóc" }
                ]
            },
            {
                vi: "Sau đó tôi vào bếp.",
                en_best: "Then I went into the kitchen.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went into", vi: "tôi vào" },
                    { en: "the kitchen", vi: "bếp" }
                ]
            },
            {
                vi: "Tôi ăn bánh mì và uống sữa.",
                en_best: "I ate bread and drank milk.",
                phrases: [
                    { en: "I ate", vi: "Tôi ăn" },
                    { en: "bread", vi: "bánh mì" },
                    { en: "and drank milk", vi: "và uống sữa" }
                ]
            },
            {
                vi: "Tôi ngồi xuống và nghỉ một chút.",
                en_best: "I sat down and rested a bit.",
                phrases: [
                    { en: "I sat down", vi: "Tôi ngồi xuống" },
                    { en: "and rested", vi: "và nghỉ" },
                    { en: "a bit", vi: "một chút" }
                ]
            },
            {
                vi: "Tôi nhìn ra bầu trời xanh.",
                en_best: "I looked at the blue sky.",
                phrases: [
                    { en: "I looked at", vi: "Tôi nhìn ra" },
                    { en: "the blue sky", vi: "bầu trời xanh" }
                ]
            },
            {
                vi: "Tôi cảm thấy thoải mái.",
                en_best: "I felt comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "comfortable", vi: "thoải mái" }
                ]
            },
            {
                vi: "Tôi thích buổi sáng yên tĩnh.",
                en_best: "I like quiet mornings.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "quiet mornings", vi: "buổi sáng yên tĩnh" }
                ]
            },
            {
                vi: "Sau đó tôi chuẩn bị đi ra ngoài.",
                en_best: "Then I got ready to go out.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I got ready", vi: "tôi chuẩn bị" },
                    { en: "to go out", vi: "đi ra ngoài" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Lesson 7",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi chiều tôi đi bộ trong công viên. Thời tiết rất đẹp. Trời có nắng nhẹ và gió mát...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi chiều tôi đi bộ trong công viên.",
                en_best: "In the afternoon I went for a walk in the park.",
                phrases: [
                    { en: "In the afternoon", vi: "Buổi chiều" },
                    { en: "I went for a walk", vi: "tôi đi bộ" },
                    { en: "in the park", vi: "trong công viên" }
                ]
            },
            {
                vi: "Thời tiết rất đẹp.",
                en_best: "The weather was very nice.",
                phrases: [
                    { en: "The weather", vi: "Thời tiết" },
                    { en: "was very nice", vi: "rất đẹp" }
                ]
            },
            {
                vi: "Trời có nắng nhẹ và gió mát.",
                en_best: "There was soft sunlight and cool breeze.",
                phrases: [
                    { en: "There was", vi: "Trời có" },
                    { en: "soft sunlight", vi: "nắng nhẹ" },
                    { en: "and cool breeze", vi: "và gió mát" }
                ]
            },
            {
                vi: "Tôi nhìn thấy nhiều cây xanh.",
                en_best: "I saw many green trees.",
                phrases: [
                    { en: "I saw", vi: "Tôi nhìn thấy" },
                    { en: "many green trees", vi: "nhiều cây xanh" }
                ]
            },
            {
                vi: "Tôi cũng thấy vài con chim nhỏ.",
                en_best: "I also saw some small birds.",
                phrases: [
                    { en: "I also saw", vi: "Tôi cũng thấy" },
                    { en: "some small birds", vi: "vài con chim nhỏ" }
                ]
            },
            {
                vi: "Một số người đang chạy bộ.",
                en_best: "Some people were running.",
                phrases: [
                    { en: "Some people", vi: "Một số người" },
                    { en: "were running", vi: "đang chạy bộ" }
                ]
            },
            {
                vi: "Một số người đang nói chuyện.",
                en_best: "Some people were talking.",
                phrases: [
                    { en: "Some people", vi: "Một số người" },
                    { en: "were talking", vi: "đang nói chuyện" }
                ]
            },
            {
                vi: "Tôi đi chậm và hít thở sâu.",
                en_best: "I walked slowly and took deep breaths.",
                phrases: [
                    { en: "I walked slowly", vi: "Tôi đi chậm" },
                    { en: "and took", vi: "và hít" },
                    { en: "deep breaths", vi: "thở sâu" }
                ]
            },
            {
                vi: "Tôi cảm thấy dễ chịu.",
                en_best: "I felt comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "comfortable", vi: "dễ chịu" }
                ]
            },
            {
                vi: "Tôi ngồi xuống ghế và nghỉ.",
                en_best: "I sat on a bench and rested.",
                phrases: [
                    { en: "I sat", vi: "Tôi ngồi xuống" },
                    { en: "on a bench", vi: "trên ghế" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi nhìn mọi người xung quanh.",
                en_best: "I looked at people around me.",
                phrases: [
                    { en: "I looked at", vi: "Tôi nhìn" },
                    { en: "people", vi: "mọi người" },
                    { en: "around me", vi: "xung quanh" }
                ]
            },
            {
                vi: "Tôi cảm thấy rất thư giãn.",
                en_best: "I felt very relaxed.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "very relaxed", vi: "rất thư giãn" }
                ]
            },
            {
                vi: "Sau đó tôi về nhà.",
                en_best: "Then I went home.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went", vi: "tôi về" },
                    { en: "home", vi: "nhà" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Lesson 8",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi đi siêu thị. Tôi mang theo túi và tiền. Siêu thị không quá đông...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi đi siêu thị.",
                en_best: "Today I went to the supermarket.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I went to", vi: "tôi đi" },
                    { en: "the supermarket", vi: "siêu thị" }
                ]
            },
            {
                vi: "Tôi mang theo túi và tiền.",
                en_best: "I brought a bag and money.",
                phrases: [
                    { en: "I brought", vi: "Tôi mang theo" },
                    { en: "a bag", vi: "túi" },
                    { en: "and money", vi: "và tiền" }
                ]
            },
            {
                vi: "Siêu thị không quá đông.",
                en_best: "The supermarket was not too crowded.",
                phrases: [
                    { en: "The supermarket", vi: "Siêu thị" },
                    { en: "was not too crowded", vi: "không quá đông" }
                ]
            },
            {
                vi: "Tôi đi qua các kệ hàng.",
                en_best: "I went through the shelves.",
                phrases: [
                    { en: "I went through", vi: "Tôi đi qua" },
                    { en: "the shelves", vi: "các kệ hàng" }
                ]
            },
            {
                vi: "Tôi mua bánh mì, sữa và trứng.",
                en_best: "I bought bread, milk and eggs.",
                phrases: [
                    { en: "I bought", vi: "Tôi mua" },
                    { en: "bread", vi: "bánh mì" },
                    { en: "milk and eggs", vi: "sữa và trứng" }
                ]
            },
            {
                vi: "Tôi cũng mua táo và chuối.",
                en_best: "I also bought apples and bananas.",
                phrases: [
                    { en: "I also bought", vi: "Tôi cũng mua" },
                    { en: "apples", vi: "táo" },
                    { en: "and bananas", vi: "và chuối" }
                ]
            },
            {
                vi: "Mọi thứ rất tươi.",
                en_best: "Everything was very fresh.",
                phrases: [
                    { en: "Everything", vi: "Mọi thứ" },
                    { en: "was very fresh", vi: "rất tươi" }
                ]
            },
            {
                vi: "Tôi trả tiền ở quầy.",
                en_best: "I paid at the counter.",
                phrases: [
                    { en: "I paid", vi: "Tôi trả tiền" },
                    { en: "at the counter", vi: "ở quầy" }
                ]
            },
            {
                vi: "Người bán hàng mỉm cười với tôi.",
                en_best: "The cashier smiled at me.",
                phrases: [
                    { en: "The cashier", vi: "Người bán hàng" },
                    { en: "smiled at", vi: "mỉm cười với" },
                    { en: "me", vi: "tôi" }
                ]
            },
            {
                vi: "Tôi nói cảm ơn.",
                en_best: "I said thank you.",
                phrases: [
                    { en: "I said", vi: "Tôi nói" },
                    { en: "thank you", vi: "cảm ơn" }
                ]
            },
            {
                vi: "Tôi mang đồ về nhà.",
                en_best: "I carried the goods home.",
                phrases: [
                    { en: "I carried", vi: "Tôi mang" },
                    { en: "the goods", vi: "đồ" },
                    { en: "home", vi: "về nhà" }
                ]
            },
            {
                vi: "Tôi thích mua sắm đơn giản như thế này.",
                en_best: "I like simple shopping like this.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "simple shopping", vi: "mua sắm đơn giản" },
                    { en: "like this", vi: "như thế này" }
                ]
            },
            {
                vi: "Sau đó tôi nấu ăn.",
                en_best: "Then I cooked.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I cooked", vi: "tôi nấu ăn" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Lesson 9",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi tối tôi ở nhà một mình. Tôi ngồi trên ghế và nghỉ. Tôi bật đèn và mở cửa sổ...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi tối tôi ở nhà một mình.",
                en_best: "In the evening I stayed home alone.",
                phrases: [
                    { en: "In the evening", vi: "Buổi tối" },
                    { en: "I stayed home", vi: "tôi ở nhà" },
                    { en: "alone", vi: "một mình" }
                ]
            },
            {
                vi: "Tôi ngồi trên ghế và nghỉ.",
                en_best: "I sat on a chair and rested.",
                phrases: [
                    { en: "I sat", vi: "Tôi ngồi" },
                    { en: "on a chair", vi: "trên ghế" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi bật đèn và mở cửa sổ.",
                en_best: "I turned on the light and opened the window.",
                phrases: [
                    { en: "I turned on", vi: "Tôi bật" },
                    { en: "the light", vi: "đèn" },
                    { en: "and opened", vi: "và mở" },
                    { en: "the window", vi: "cửa sổ" }
                ]
            },
            {
                vi: "Không khí mát và yên tĩnh.",
                en_best: "The air was cool and quiet.",
                phrases: [
                    { en: "The air", vi: "Không khí" },
                    { en: "was cool", vi: "mát" },
                    { en: "and quiet", vi: "và yên tĩnh" }
                ]
            },
            {
                vi: "Tôi pha trà nóng.",
                en_best: "I made hot tea.",
                phrases: [
                    { en: "I made", vi: "Tôi pha" },
                    { en: "hot tea", vi: "trà nóng" }
                ]
            },
            {
                vi: "Tôi uống chậm và thư giãn.",
                en_best: "I drank slowly and relaxed.",
                phrases: [
                    { en: "I drank slowly", vi: "Tôi uống chậm" },
                    { en: "and relaxed", vi: "và thư giãn" }
                ]
            },
            {
                vi: "Tôi nghe nhạc nhẹ trên điện thoại.",
                en_best: "I listened to soft music on my phone.",
                phrases: [
                    { en: "I listened to", vi: "Tôi nghe" },
                    { en: "soft music", vi: "nhạc nhẹ" },
                    { en: "on my phone", vi: "trên điện thoại" }
                ]
            },
            {
                vi: "Tôi nghĩ về ngày hôm nay.",
                en_best: "I thought about today.",
                phrases: [
                    { en: "I thought about", vi: "Tôi nghĩ về" },
                    { en: "today", vi: "ngày hôm nay" }
                ]
            },
            {
                vi: "Hôm nay không quá bận.",
                en_best: "Today was not too busy.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "was not too busy", vi: "không quá bận" }
                ]
            },
            {
                vi: "Tôi cảm thấy ổn.",
                en_best: "I felt okay.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "okay", vi: "ổn" }
                ]
            },
            {
                vi: "Tôi mỉm cười.",
                en_best: "I smiled.",
                phrases: [
                    { en: "I smiled", vi: "Tôi mỉm cười" }
                ]
            },
            {
                vi: "Tôi thích buổi tối yên bình.",
                en_best: "I like peaceful evenings.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "peaceful evenings", vi: "buổi tối yên bình" }
                ]
            },
            {
                vi: "Sau đó tôi đi ngủ.",
                en_best: "Then I went to sleep.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went to sleep", vi: "tôi đi ngủ" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Lesson 10",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi dọn dẹp phòng. Tôi gấp chăn và sắp xếp giường. Tôi lau bàn và ghế...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi dọn dẹp phòng.",
                en_best: "Today I cleaned the room.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I cleaned", vi: "tôi dọn dẹp" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi gấp chăn và sắp xếp giường.",
                en_best: "I folded the blanket and arranged the bed.",
                phrases: [
                    { en: "I folded", vi: "Tôi gấp" },
                    { en: "the blanket", vi: "chăn" },
                    { en: "and arranged", vi: "và sắp xếp" },
                    { en: "the bed", vi: "giường" }
                ]
            },
            {
                vi: "Tôi lau bàn và ghế.",
                en_best: "I wiped the table and chair.",
                phrases: [
                    { en: "I wiped", vi: "Tôi lau" },
                    { en: "the table", vi: "bàn" },
                    { en: "and chair", vi: "và ghế" }
                ]
            },
            {
                vi: "Tôi quét sàn nhà.",
                en_best: "I swept the floor.",
                phrases: [
                    { en: "I swept", vi: "Tôi quét" },
                    { en: "the floor", vi: "sàn nhà" }
                ]
            },
            {
                vi: "Căn phòng trở nên sạch sẽ.",
                en_best: "The room became clean.",
                phrases: [
                    { en: "The room", vi: "Căn phòng" },
                    { en: "became clean", vi: "trở nên sạch sẽ" }
                ]
            },
            {
                vi: "Tôi mở cửa sổ cho thoáng.",
                en_best: "I opened the window for ventilation.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "the window", vi: "cửa sổ" },
                    { en: "for ventilation", vi: "cho thoáng" }
                ]
            },
            {
                vi: "Ánh nắng chiếu vào phòng.",
                en_best: "Sunlight shone into the room.",
                phrases: [
                    { en: "Sunlight", vi: "Ánh nắng" },
                    { en: "shone into", vi: "chiếu vào" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi cảm thấy dễ chịu.",
                en_best: "I felt comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "comfortable", vi: "dễ chịu" }
                ]
            },
            {
                vi: "Tôi uống nước và nghỉ một chút.",
                en_best: "I drank water and rested a bit.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" },
                    { en: "and rested", vi: "và nghỉ" },
                    { en: "a bit", vi: "một chút" }
                ]
            },
            {
                vi: "Tôi nhìn quanh phòng.",
                en_best: "I looked around the room.",
                phrases: [
                    { en: "I looked around", vi: "Tôi nhìn quanh" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi thích phòng sạch sẽ.",
                en_best: "I like a clean room.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "a clean room", vi: "phòng sạch sẽ" }
                ]
            },
            {
                vi: "Sau đó tôi nghe nhạc.",
                en_best: "Then I listened to music.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I listened to", vi: "tôi nghe" },
                    { en: "music", vi: "nhạc" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Lesson 11",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Cuối tuần tôi gặp bạn. Chúng tôi đi bộ cùng nhau. Chúng tôi nói chuyện và cười...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Cuối tuần tôi gặp bạn.",
                en_best: "On the weekend I met my friend.",
                phrases: [
                    { en: "On the weekend", vi: "Cuối tuần" },
                    { en: "I met", vi: "tôi gặp" },
                    { en: "my friend", vi: "bạn" }
                ]
            },
            {
                vi: "Chúng tôi đi bộ cùng nhau.",
                en_best: "We went for a walk together.",
                phrases: [
                    { en: "We", vi: "Chúng tôi" },
                    { en: "went for a walk", vi: "đi bộ" },
                    { en: "together", vi: "cùng nhau" }
                ]
            },
            {
                vi: "Chúng tôi nói chuyện và cười.",
                en_best: "We talked and laughed.",
                phrases: [
                    { en: "We", vi: "Chúng tôi" },
                    { en: "talked", vi: "nói chuyện" },
                    { en: "and laughed", vi: "và cười" }
                ]
            },
            {
                vi: "Chúng tôi ngồi trong quán nhỏ.",
                en_best: "We sat in a small café.",
                phrases: [
                    { en: "We sat", vi: "Chúng tôi ngồi" },
                    { en: "in a small café", vi: "trong quán nhỏ" }
                ]
            },
            {
                vi: "Tôi uống trà.",
                en_best: "I drank tea.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "tea", vi: "trà" }
                ]
            },
            {
                vi: "Bạn tôi uống cà phê.",
                en_best: "My friend drank coffee.",
                phrases: [
                    { en: "My friend", vi: "Bạn tôi" },
                    { en: "drank", vi: "uống" },
                    { en: "coffee", vi: "cà phê" }
                ]
            },
            {
                vi: "Chúng tôi nói về công việc và cuộc sống.",
                en_best: "We talked about work and life.",
                phrases: [
                    { en: "We talked about", vi: "Chúng tôi nói về" },
                    { en: "work", vi: "công việc" },
                    { en: "and life", vi: "và cuộc sống" }
                ]
            },
            {
                vi: "Tôi cảm thấy vui.",
                en_best: "I felt happy.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "happy", vi: "vui" }
                ]
            },
            {
                vi: "Tôi thích nói chuyện với bạn.",
                en_best: "I like talking with my friend.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "talking", vi: "nói chuyện" },
                    { en: "with my friend", vi: "với bạn" }
                ]
            },
            {
                vi: "Thời gian trôi nhanh.",
                en_best: "Time flew quickly.",
                phrases: [
                    { en: "Time", vi: "Thời gian" },
                    { en: "flew", vi: "trôi" },
                    { en: "quickly", vi: "nhanh" }
                ]
            },
            {
                vi: "Tôi rất vui khi gặp bạn.",
                en_best: "I was very happy to see my friend.",
                phrases: [
                    { en: "I was very happy", vi: "Tôi rất vui" },
                    { en: "to see", vi: "khi gặp" },
                    { en: "my friend", vi: "bạn" }
                ]
            },
            {
                vi: "Sau đó chúng tôi về nhà.",
                en_best: "Then we went home.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "we", vi: "chúng tôi" },
                    { en: "went home", vi: "về nhà" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Lesson 12",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Sáng nay trời mưa nhẹ. Tôi nghe tiếng mưa trên mái nhà. Tôi mở cửa sổ và nhìn ra ngoài...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Sáng nay trời mưa nhẹ.",
                en_best: "This morning it rained lightly.",
                phrases: [
                    { en: "This morning", vi: "Sáng nay" },
                    { en: "it rained", vi: "trời mưa" },
                    { en: "lightly", vi: "nhẹ" }
                ]
            },
            {
                vi: "Tôi nghe tiếng mưa trên mái nhà.",
                en_best: "I heard the sound of rain on the roof.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "the sound of rain", vi: "tiếng mưa" },
                    { en: "on the roof", vi: "trên mái nhà" }
                ]
            },
            {
                vi: "Tôi mở cửa sổ và nhìn ra ngoài.",
                en_best: "I opened the window and looked outside.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "the window", vi: "cửa sổ" },
                    { en: "and looked outside", vi: "và nhìn ra ngoài" }
                ]
            },
            {
                vi: "Đường phố ướt và mát.",
                en_best: "The streets were wet and cool.",
                phrases: [
                    { en: "The streets", vi: "Đường phố" },
                    { en: "were wet", vi: "ướt" },
                    { en: "and cool", vi: "và mát" }
                ]
            },
            {
                vi: "Tôi pha trà nóng.",
                en_best: "I made hot tea.",
                phrases: [
                    { en: "I made", vi: "Tôi pha" },
                    { en: "hot tea", vi: "trà nóng" }
                ]
            },
            {
                vi: "Tôi ngồi gần cửa sổ.",
                en_best: "I sat near the window.",
                phrases: [
                    { en: "I sat", vi: "Tôi ngồi" },
                    { en: "near the window", vi: "gần cửa sổ" }
                ]
            },
            {
                vi: "Tôi nghe tiếng mưa rơi.",
                en_best: "I listened to the rain falling.",
                phrases: [
                    { en: "I listened to", vi: "Tôi nghe" },
                    { en: "the rain", vi: "tiếng mưa" },
                    { en: "falling", vi: "rơi" }
                ]
            },
            {
                vi: "Tôi cảm thấy bình yên.",
                en_best: "I felt peaceful.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "peaceful", vi: "bình yên" }
                ]
            },
            {
                vi: "Tôi thích thời tiết mát mẻ.",
                en_best: "I like cool weather.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "cool weather", vi: "thời tiết mát mẻ" }
                ]
            },
            {
                vi: "Tôi không vội.",
                en_best: "I was not in a hurry.",
                phrases: [
                    { en: "I was not", vi: "Tôi không" },
                    { en: "in a hurry", vi: "vội" }
                ]
            },
            {
                vi: "Tôi thích nghe tiếng mưa.",
                en_best: "I like listening to the rain.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "listening to", vi: "nghe" },
                    { en: "the rain", vi: "tiếng mưa" }
                ]
            },
            {
                vi: "Sau đó tôi đọc sách.",
                en_best: "Then I read a book.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I read", vi: "tôi đọc" },
                    { en: "a book", vi: "sách" }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Lesson 13",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi nấu ăn ở nhà. Tôi rửa rau và cắt thịt. Tôi bật bếp và nấu chậm...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi nấu ăn ở nhà.",
                en_best: "Today I cooked at home.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I cooked", vi: "tôi nấu ăn" },
                    { en: "at home", vi: "ở nhà" }
                ]
            },
            {
                vi: "Tôi rửa rau và cắt thịt.",
                en_best: "I washed vegetables and cut meat.",
                phrases: [
                    { en: "I washed", vi: "Tôi rửa" },
                    { en: "vegetables", vi: "rau" },
                    { en: "and cut", vi: "và cắt" },
                    { en: "meat", vi: "thịt" }
                ]
            },
            {
                vi: "Tôi bật bếp và nấu chậm.",
                en_best: "I turned on the stove and cooked slowly.",
                phrases: [
                    { en: "I turned on", vi: "Tôi bật" },
                    { en: "the stove", vi: "bếp" },
                    { en: "and cooked slowly", vi: "và nấu chậm" }
                ]
            },
            {
                vi: "Mùi thức ăn rất thơm.",
                en_best: "The food smelled very good.",
                phrases: [
                    { en: "The food", vi: "Mùi thức ăn" },
                    { en: "smelled very good", vi: "rất thơm" }
                ]
            },
            {
                vi: "Tôi chuẩn bị bàn ăn.",
                en_best: "I set the table.",
                phrases: [
                    { en: "I set", vi: "Tôi chuẩn bị" },
                    { en: "the table", vi: "bàn ăn" }
                ]
            },
            {
                vi: "Tôi ngồi xuống và ăn.",
                en_best: "I sat down and ate.",
                phrases: [
                    { en: "I sat down", vi: "Tôi ngồi xuống" },
                    { en: "and ate", vi: "và ăn" }
                ]
            },
            {
                vi: "Thức ăn đơn giản nhưng ngon.",
                en_best: "The food was simple but delicious.",
                phrases: [
                    { en: "The food", vi: "Thức ăn" },
                    { en: "was simple", vi: "đơn giản" },
                    { en: "but delicious", vi: "nhưng ngon" }
                ]
            },
            {
                vi: "Tôi uống nước và nghỉ.",
                en_best: "I drank water and rested.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi cảm thấy no và vui.",
                en_best: "I felt full and happy.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "full", vi: "no" },
                    { en: "and happy", vi: "và vui" }
                ]
            },
            {
                vi: "Tôi dọn dẹp bếp.",
                en_best: "I cleaned the kitchen.",
                phrases: [
                    { en: "I cleaned", vi: "Tôi dọn dẹp" },
                    { en: "the kitchen", vi: "bếp" }
                ]
            },
            {
                vi: "Tôi thích nấu ăn ở nhà.",
                en_best: "I like cooking at home.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "cooking", vi: "nấu ăn" },
                    { en: "at home", vi: "ở nhà" }
                ]
            },
            {
                vi: "Sau đó tôi nghỉ ngơi.",
                en_best: "Then I rested.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I rested", vi: "tôi nghỉ ngơi" }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "Lesson 14",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi sáng tôi tập thể dục. Tôi đứng dậy sớm. Tôi đi ra ngoài và hít thở sâu...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi sáng tôi tập thể dục.",
                en_best: "In the morning I did exercise.",
                phrases: [
                    { en: "In the morning", vi: "Buổi sáng" },
                    { en: "I did", vi: "tôi tập" },
                    { en: "exercise", vi: "thể dục" }
                ]
            },
            {
                vi: "Tôi đứng dậy sớm.",
                en_best: "I woke up early.",
                phrases: [
                    { en: "I woke up", vi: "Tôi đứng dậy" },
                    { en: "early", vi: "sớm" }
                ]
            },
            {
                vi: "Tôi đi ra ngoài và hít thở sâu.",
                en_best: "I went outside and took deep breaths.",
                phrases: [
                    { en: "I went outside", vi: "Tôi đi ra ngoài" },
                    { en: "and took", vi: "và hít" },
                    { en: "deep breaths", vi: "thở sâu" }
                ]
            },
            {
                vi: "Tôi đi bộ chậm.",
                en_best: "I walked slowly.",
                phrases: [
                    { en: "I walked", vi: "Tôi đi" },
                    { en: "slowly", vi: "chậm" }
                ]
            },
            {
                vi: "Tôi vươn vai và duỗi người.",
                en_best: "I stretched my shoulders and body.",
                phrases: [
                    { en: "I stretched", vi: "Tôi vươn" },
                    { en: "my shoulders", vi: "vai" },
                    { en: "and body", vi: "và duỗi người" }
                ]
            },
            {
                vi: "Cơ thể tôi cảm thấy khỏe hơn.",
                en_best: "My body felt healthier.",
                phrases: [
                    { en: "My body", vi: "Cơ thể tôi" },
                    { en: "felt", vi: "cảm thấy" },
                    { en: "healthier", vi: "khỏe hơn" }
                ]
            },
            {
                vi: "Tôi uống nước sau khi tập.",
                en_best: "I drank water after exercising.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" },
                    { en: "after exercising", vi: "sau khi tập" }
                ]
            },
            {
                vi: "Tôi lau mồ hôi và nghỉ.",
                en_best: "I wiped sweat and rested.",
                phrases: [
                    { en: "I wiped", vi: "Tôi lau" },
                    { en: "sweat", vi: "mồ hôi" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi cảm thấy nhiều năng lượng.",
                en_best: "I felt more energetic.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "more energetic", vi: "nhiều năng lượng" }
                ]
            },
            {
                vi: "Tôi mỉm cười.",
                en_best: "I smiled.",
                phrases: [
                    { en: "I smiled", vi: "Tôi mỉm cười" }
                ]
            },
            {
                vi: "Tôi thích tập thể dục buổi sáng.",
                en_best: "I like exercising in the morning.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "exercising", vi: "tập thể dục" },
                    { en: "in the morning", vi: "buổi sáng" }
                ]
            },
            {
                vi: "Sau đó tôi ăn sáng.",
                en_best: "Then I ate breakfast.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I ate", vi: "tôi ăn" },
                    { en: "breakfast", vi: "sáng" }
                ]
            }
        ]
    },
    {
        id: 15,
        title: "Lesson 15",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Tối nay tôi rất mệt. Tôi về nhà và ngồi xuống ghế. Tôi uống nước và nghỉ...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Tối nay tôi rất mệt.",
                en_best: "Tonight I was very tired.",
                phrases: [
                    { en: "Tonight", vi: "Tối nay" },
                    { en: "I was", vi: "tôi" },
                    { en: "very tired", vi: "rất mệt" }
                ]
            },
            {
                vi: "Tôi về nhà và ngồi xuống ghế.",
                en_best: "I came home and sat on a chair.",
                phrases: [
                    { en: "I came home", vi: "Tôi về nhà" },
                    { en: "and sat", vi: "và ngồi xuống" },
                    { en: "on a chair", vi: "trên ghế" }
                ]
            },
            {
                vi: "Tôi uống nước và nghỉ.",
                en_best: "I drank water and rested.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi tắm nước ấm.",
                en_best: "I took a warm bath.",
                phrases: [
                    { en: "I took", vi: "Tôi tắm" },
                    { en: "a warm bath", vi: "nước ấm" }
                ]
            },
            {
                vi: "Tôi thay quần áo thoải mái.",
                en_best: "I changed into comfortable clothes.",
                phrases: [
                    { en: "I changed into", vi: "Tôi thay" },
                    { en: "comfortable clothes", vi: "quần áo thoải mái" }
                ]
            },
            {
                vi: "Tôi nằm trên giường.",
                en_best: "I lay on the bed.",
                phrases: [
                    { en: "I lay", vi: "Tôi nằm" },
                    { en: "on the bed", vi: "trên giường" }
                ]
            },
            {
                vi: "Tôi nhìn lên trần nhà.",
                en_best: "I looked at the ceiling.",
                phrases: [
                    { en: "I looked at", vi: "Tôi nhìn lên" },
                    { en: "the ceiling", vi: "trần nhà" }
                ]
            },
            {
                vi: "Mọi thứ rất yên tĩnh.",
                en_best: "Everything was very quiet.",
                phrases: [
                    { en: "Everything", vi: "Mọi thứ" },
                    { en: "was very quiet", vi: "rất yên tĩnh" }
                ]
            },
            {
                vi: "Tôi thở chậm và thư giãn.",
                en_best: "I breathed slowly and relaxed.",
                phrases: [
                    { en: "I breathed slowly", vi: "Tôi thở chậm" },
                    { en: "and relaxed", vi: "và thư giãn" }
                ]
            },
            {
                vi: "Tôi nhắm mắt.",
                en_best: "I closed my eyes.",
                phrases: [
                    { en: "I closed", vi: "Tôi nhắm" },
                    { en: "my eyes", vi: "mắt" }
                ]
            },
            {
                vi: "Tôi muốn ngủ sớm hôm nay.",
                en_best: "I wanted to sleep early tonight.",
                phrases: [
                    { en: "I wanted", vi: "Tôi muốn" },
                    { en: "to sleep", vi: "ngủ" },
                    { en: "early", vi: "sớm" },
                    { en: "tonight", vi: "hôm nay" }
                ]
            },
            {
                vi: "Sau đó tôi tắt đèn.",
                en_best: "Then I turned off the light.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I turned off", vi: "tôi tắt" },
                    { en: "the light", vi: "đèn" }
                ]
            }
        ]
    },
    {
        id: 16,
        title: "Lesson 16",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Sáng nay tôi dậy lúc sáu giờ. Tôi mở cửa sổ và nhìn ra ngoài. Trời rất yên tĩnh...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Sáng nay tôi dậy lúc sáu giờ.",
                en_best: "This morning I woke up at six.",
                phrases: [
                    { en: "This morning", vi: "Sáng nay" },
                    { en: "I woke up", vi: "tôi dậy" },
                    { en: "at six", vi: "lúc sáu giờ" }
                ]
            },
            {
                vi: "Tôi mở cửa sổ và nhìn ra ngoài.",
                en_best: "I opened the window and looked outside.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "the window", vi: "cửa sổ" },
                    { en: "and looked outside", vi: "và nhìn ra ngoài" }
                ]
            },
            {
                vi: "Trời rất yên tĩnh.",
                en_best: "The sky was very quiet.",
                phrases: [
                    { en: "The sky", vi: "Trời" },
                    { en: "was very quiet", vi: "rất yên tĩnh" }
                ]
            },
            {
                vi: "Tôi rửa mặt và đánh răng.",
                en_best: "I washed my face and brushed my teeth.",
                phrases: [
                    { en: "I washed my face", vi: "Tôi rửa mặt" },
                    { en: "and brushed my teeth", vi: "và đánh răng" }
                ]
            },
            {
                vi: "Sau đó tôi vào bếp.",
                en_best: "Then I went into the kitchen.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went into", vi: "tôi vào" },
                    { en: "the kitchen", vi: "bếp" }
                ]
            },
            {
                vi: "Tôi ăn bánh mì và uống sữa.",
                en_best: "I ate bread and drank milk.",
                phrases: [
                    { en: "I ate", vi: "Tôi ăn" },
                    { en: "bread", vi: "bánh mì" },
                    { en: "and drank milk", vi: "và uống sữa" }
                ]
            },
            {
                vi: "Tôi ngồi xuống ghế và nghỉ một chút.",
                en_best: "I sat on a chair and rested a bit.",
                phrases: [
                    { en: "I sat", vi: "Tôi ngồi xuống" },
                    { en: "on a chair", vi: "trên ghế" },
                    { en: "and rested", vi: "và nghỉ" },
                    { en: "a bit", vi: "một chút" }
                ]
            },
            {
                vi: "Tôi nghe tiếng chim.",
                en_best: "I heard birds singing.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "birds singing", vi: "tiếng chim" }
                ]
            },
            {
                vi: "Tôi cảm thấy dễ chịu.",
                en_best: "I felt comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "comfortable", vi: "dễ chịu" }
                ]
            },
            {
                vi: "Tôi nhìn đồng hồ và chuẩn bị đi làm.",
                en_best: "I looked at the clock and got ready for work.",
                phrases: [
                    { en: "I looked at", vi: "Tôi nhìn" },
                    { en: "the clock", vi: "đồng hồ" },
                    { en: "and got ready", vi: "và chuẩn bị" },
                    { en: "for work", vi: "đi làm" }
                ]
            },
            {
                vi: "Tôi bắt đầu ngày mới với năng lượng tốt.",
                en_best: "I started a new day with good energy.",
                phrases: [
                    { en: "I started", vi: "Tôi bắt đầu" },
                    { en: "a new day", vi: "ngày mới" },
                    { en: "with good energy", vi: "với năng lượng tốt" }
                ]
            },
            {
                vi: "Tôi mặc áo và mang giày.",
                en_best: "I put on my shirt and shoes.",
                phrases: [
                    { en: "I put on", vi: "Tôi mặc" },
                    { en: "my shirt", vi: "áo" },
                    { en: "and shoes", vi: "và mang giày" }
                ]
            }
        ]
    },
    {
        id: 17,
        title: "Lesson 17",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi chiều tôi đi bộ về nhà. Trời có gió nhẹ. Tôi nhìn thấy nhiều người trên đường...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi chiều tôi đi bộ về nhà.",
                en_best: "In the afternoon I walked home.",
                phrases: [
                    { en: "In the afternoon", vi: "Buổi chiều" },
                    { en: "I walked", vi: "tôi đi bộ" },
                    { en: "home", vi: "về nhà" }
                ]
            },
            {
                vi: "Trời có gió nhẹ.",
                en_best: "There was a gentle breeze.",
                phrases: [
                    { en: "There was", vi: "Trời có" },
                    { en: "a gentle breeze", vi: "gió nhẹ" }
                ]
            },
            {
                vi: "Tôi nhìn thấy nhiều người trên đường.",
                en_best: "I saw many people on the street.",
                phrases: [
                    { en: "I saw", vi: "Tôi nhìn thấy" },
                    { en: "many people", vi: "nhiều người" },
                    { en: "on the street", vi: "trên đường" }
                ]
            },
            {
                vi: "Một số người đang nói chuyện.",
                en_best: "Some people were talking.",
                phrases: [
                    { en: "Some people", vi: "Một số người" },
                    { en: "were talking", vi: "đang nói chuyện" }
                ]
            },
            {
                vi: "Một số người đang đi nhanh.",
                en_best: "Some people were walking fast.",
                phrases: [
                    { en: "Some people", vi: "Một số người" },
                    { en: "were walking fast", vi: "đang đi nhanh" }
                ]
            },
            {
                vi: "Tôi đi chậm và hít thở sâu.",
                en_best: "I walked slowly and took deep breaths.",
                phrases: [
                    { en: "I walked slowly", vi: "Tôi đi chậm" },
                    { en: "and took", vi: "và hít" },
                    { en: "deep breaths", vi: "thở sâu" }
                ]
            },
            {
                vi: "Tôi cảm thấy thoải mái.",
                en_best: "I felt comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "comfortable", vi: "thoải mái" }
                ]
            },
            {
                vi: "Tôi dừng lại và nghỉ.",
                en_best: "I stopped and rested.",
                phrases: [
                    { en: "I stopped", vi: "Tôi dừng lại" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi nhìn bầu trời.",
                en_best: "I looked at the sky.",
                phrases: [
                    { en: "I looked at", vi: "Tôi nhìn" },
                    { en: "the sky", vi: "bầu trời" }
                ]
            },
            {
                vi: "Tôi thích đi bộ sau giờ làm.",
                en_best: "I like walking after work.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "walking", vi: "đi bộ" },
                    { en: "after work", vi: "sau giờ làm" }
                ]
            },
            {
                vi: "Sau đó tôi về nhà.",
                en_best: "Then I went home.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went", vi: "tôi về" },
                    { en: "home", vi: "nhà" }
                ]
            }
        ]
    },
    {
        id: 18,
        title: "Lesson 18",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi đi chợ. Tôi mang theo túi. Tôi mua rau và thịt...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi đi chợ.",
                en_best: "Today I went to the market.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I went", vi: "tôi đi" },
                    { en: "to the market", vi: "chợ" }
                ]
            },
            {
                vi: "Tôi mang theo túi.",
                en_best: "I brought a bag.",
                phrases: [
                    { en: "I brought", vi: "Tôi mang theo" },
                    { en: "a bag", vi: "túi" }
                ]
            },
            {
                vi: "Tôi mua rau và thịt.",
                en_best: "I bought vegetables and meat.",
                phrases: [
                    { en: "I bought", vi: "Tôi mua" },
                    { en: "vegetables", vi: "rau" },
                    { en: "and meat", vi: "và thịt" }
                ]
            },
            {
                vi: "Tôi cũng mua trái cây.",
                en_best: "I also bought fruits.",
                phrases: [
                    { en: "I also bought", vi: "Tôi cũng mua" },
                    { en: "fruits", vi: "trái cây" }
                ]
            },
            {
                vi: "Người bán hàng rất thân thiện.",
                en_best: "The seller was very friendly.",
                phrases: [
                    { en: "The seller", vi: "Người bán hàng" },
                    { en: "was very friendly", vi: "rất thân thiện" }
                ]
            },
            {
                vi: "Tôi nói cảm ơn.",
                en_best: "I said thank you.",
                phrases: [
                    { en: "I said", vi: "Tôi nói" },
                    { en: "thank you", vi: "cảm ơn" }
                ]
            },
            {
                vi: "Tôi mang đồ về nhà.",
                en_best: "I carried the items home.",
                phrases: [
                    { en: "I carried", vi: "Tôi mang" },
                    { en: "the items", vi: "đồ" },
                    { en: "home", vi: "về nhà" }
                ]
            },
            {
                vi: "Tôi rửa tay và sắp xếp đồ ăn.",
                en_best: "I washed my hands and organized the food.",
                phrases: [
                    { en: "I washed my hands", vi: "Tôi rửa tay" },
                    { en: "and organized", vi: "và sắp xếp" },
                    { en: "the food", vi: "đồ ăn" }
                ]
            },
            {
                vi: "Tôi cảm thấy vui.",
                en_best: "I felt happy.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "happy", vi: "vui" }
                ]
            },
            {
                vi: "Tôi thích mua đồ ăn tươi.",
                en_best: "I like buying fresh food.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "buying", vi: "mua" },
                    { en: "fresh food", vi: "đồ ăn tươi" }
                ]
            },
            {
                vi: "Sau đó tôi nấu ăn.",
                en_best: "Then I cooked.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I cooked", vi: "tôi nấu ăn" }
                ]
            }
        ]
    },
    {
        id: 19,
        title: "Lesson 19",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi tối tôi ngồi trong phòng. Tôi bật đèn và mở cửa sổ. Không khí rất mát...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi tối tôi ngồi trong phòng.",
                en_best: "In the evening I sat in the room.",
                phrases: [
                    { en: "In the evening", vi: "Buổi tối" },
                    { en: "I sat", vi: "tôi ngồi" },
                    { en: "in the room", vi: "trong phòng" }
                ]
            },
            {
                vi: "Tôi bật đèn và mở cửa sổ.",
                en_best: "I turned on the light and opened the window.",
                phrases: [
                    { en: "I turned on", vi: "Tôi bật" },
                    { en: "the light", vi: "đèn" },
                    { en: "and opened", vi: "và mở" },
                    { en: "the window", vi: "cửa sổ" }
                ]
            },
            {
                vi: "Không khí rất mát.",
                en_best: "The air was very cool.",
                phrases: [
                    { en: "The air", vi: "Không khí" },
                    { en: "was very cool", vi: "rất mát" }
                ]
            },
            {
                vi: "Tôi pha trà nóng.",
                en_best: "I made hot tea.",
                phrases: [
                    { en: "I made", vi: "Tôi pha" },
                    { en: "hot tea", vi: "trà nóng" }
                ]
            },
            {
                vi: "Tôi uống chậm và thư giãn.",
                en_best: "I drank slowly and relaxed.",
                phrases: [
                    { en: "I drank slowly", vi: "Tôi uống chậm" },
                    { en: "and relaxed", vi: "và thư giãn" }
                ]
            },
            {
                vi: "Tôi nghe nhạc nhẹ.",
                en_best: "I listened to soft music.",
                phrases: [
                    { en: "I listened to", vi: "Tôi nghe" },
                    { en: "soft music", vi: "nhạc nhẹ" }
                ]
            },
            {
                vi: "Tôi nghĩ về ngày hôm nay.",
                en_best: "I thought about today.",
                phrases: [
                    { en: "I thought about", vi: "Tôi nghĩ về" },
                    { en: "today", vi: "ngày hôm nay" }
                ]
            },
            {
                vi: "Tôi cảm thấy ổn.",
                en_best: "I felt okay.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "okay", vi: "ổn" }
                ]
            },
            {
                vi: "Tôi mỉm cười.",
                en_best: "I smiled.",
                phrases: [
                    { en: "I smiled", vi: "Tôi mỉm cười" }
                ]
            },
            {
                vi: "Tôi thích buổi tối yên tĩnh.",
                en_best: "I like quiet evenings.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "quiet evenings", vi: "buổi tối yên tĩnh" }
                ]
            },
            {
                vi: "Sau đó tôi đi ngủ.",
                en_best: "Then I went to sleep.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I went to sleep", vi: "tôi đi ngủ" }
                ]
            }
        ]
    },
    {
        id: 20,
        title: "Lesson 20",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi ở nhà. Tôi dọn dẹp phòng. Tôi lau bàn và ghế...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi ở nhà.",
                en_best: "Today I stayed home.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I stayed", vi: "tôi ở" },
                    { en: "home", vi: "nhà" }
                ]
            },
            {
                vi: "Tôi dọn dẹp phòng.",
                en_best: "I cleaned the room.",
                phrases: [
                    { en: "I cleaned", vi: "Tôi dọn dẹp" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi lau bàn và ghế.",
                en_best: "I wiped the table and chair.",
                phrases: [
                    { en: "I wiped", vi: "Tôi lau" },
                    { en: "the table", vi: "bàn" },
                    { en: "and chair", vi: "và ghế" }
                ]
            },
            {
                vi: "Tôi quét sàn.",
                en_best: "I swept the floor.",
                phrases: [
                    { en: "I swept", vi: "Tôi quét" },
                    { en: "the floor", vi: "sàn" }
                ]
            },
            {
                vi: "Căn phòng sạch hơn.",
                en_best: "The room became cleaner.",
                phrases: [
                    { en: "The room", vi: "Căn phòng" },
                    { en: "became cleaner", vi: "sạch hơn" }
                ]
            },
            {
                vi: "Tôi mở cửa sổ cho thoáng.",
                en_best: "I opened the window for ventilation.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "the window", vi: "cửa sổ" },
                    { en: "for ventilation", vi: "cho thoáng" }
                ]
            },
            {
                vi: "Ánh nắng chiếu vào phòng.",
                en_best: "Sunlight shone into the room.",
                phrases: [
                    { en: "Sunlight", vi: "Ánh nắng" },
                    { en: "shone into", vi: "chiếu vào" },
                    { en: "the room", vi: "phòng" }
                ]
            },
            {
                vi: "Tôi cảm thấy dễ chịu.",
                en_best: "I felt comfortable.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "comfortable", vi: "dễ chịu" }
                ]
            },
            {
                vi: "Tôi uống nước.",
                en_best: "I drank water.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" }
                ]
            },
            {
                vi: "Tôi thích phòng gọn gàng.",
                en_best: "I like a tidy room.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "a tidy room", vi: "phòng gọn gàng" }
                ]
            },
            {
                vi: "Sau đó tôi nghỉ.",
                en_best: "Then I rested.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I rested", vi: "tôi nghỉ" }
                ]
            }
        ]
    },
    {
        id: 21,
        title: "Lesson 21",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Cuối tuần tôi gặp bạn. Chúng tôi đi bộ và nói chuyện. Chúng tôi cười rất nhiều...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Cuối tuần tôi gặp bạn.",
                en_best: "On the weekend I met my friend.",
                phrases: [
                    { en: "On the weekend", vi: "Cuối tuần" },
                    { en: "I met", vi: "tôi gặp" },
                    { en: "my friend", vi: "bạn" }
                ]
            },
            {
                vi: "Chúng tôi đi bộ và nói chuyện.",
                en_best: "We went for a walk and talked.",
                phrases: [
                    { en: "We", vi: "Chúng tôi" },
                    { en: "went for a walk", vi: "đi bộ" },
                    { en: "and talked", vi: "và nói chuyện" }
                ]
            },
            {
                vi: "Chúng tôi cười rất nhiều.",
                en_best: "We laughed a lot.",
                phrases: [
                    { en: "We", vi: "Chúng tôi" },
                    { en: "laughed", vi: "cười" },
                    { en: "a lot", vi: "rất nhiều" }
                ]
            },
            {
                vi: "Chúng tôi ngồi trong quán nhỏ.",
                en_best: "We sat in a small café.",
                phrases: [
                    { en: "We sat", vi: "Chúng tôi ngồi" },
                    { en: "in a small café", vi: "trong quán nhỏ" }
                ]
            },
            {
                vi: "Tôi uống trà.",
                en_best: "I drank tea.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "tea", vi: "trà" }
                ]
            },
            {
                vi: "Bạn tôi uống cà phê.",
                en_best: "My friend drank coffee.",
                phrases: [
                    { en: "My friend", vi: "Bạn tôi" },
                    { en: "drank", vi: "uống" },
                    { en: "coffee", vi: "cà phê" }
                ]
            },
            {
                vi: "Tôi cảm thấy vui.",
                en_best: "I felt happy.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "happy", vi: "vui" }
                ]
            },
            {
                vi: "Thời gian trôi nhanh.",
                en_best: "Time flew quickly.",
                phrases: [
                    { en: "Time", vi: "Thời gian" },
                    { en: "flew", vi: "trôi" },
                    { en: "quickly", vi: "nhanh" }
                ]
            },
            {
                vi: "Tôi thích gặp bạn vào cuối tuần.",
                en_best: "I like meeting my friend on the weekend.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "meeting", vi: "gặp" },
                    { en: "my friend", vi: "bạn" },
                    { en: "on the weekend", vi: "vào cuối tuần" }
                ]
            },
            {
                vi: "Sau đó chúng tôi về nhà.",
                en_best: "Then we went home.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "we", vi: "chúng tôi" },
                    { en: "went home", vi: "về nhà" }
                ]
            }
        ]
    },
    {
        id: 22,
        title: "Lesson 22",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Sáng nay trời mưa. Tôi nghe tiếng mưa rơi. Tôi mở cửa sổ và nhìn ra ngoài...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Sáng nay trời mưa.",
                en_best: "This morning it rained.",
                phrases: [
                    { en: "This morning", vi: "Sáng nay" },
                    { en: "it rained", vi: "trời mưa" }
                ]
            },
            {
                vi: "Tôi nghe tiếng mưa rơi.",
                en_best: "I heard the rain falling.",
                phrases: [
                    { en: "I heard", vi: "Tôi nghe" },
                    { en: "the rain", vi: "tiếng mưa" },
                    { en: "falling", vi: "rơi" }
                ]
            },
            {
                vi: "Tôi mở cửa sổ và nhìn ra ngoài.",
                en_best: "I opened the window and looked outside.",
                phrases: [
                    { en: "I opened", vi: "Tôi mở" },
                    { en: "the window", vi: "cửa sổ" },
                    { en: "and looked outside", vi: "và nhìn ra ngoài" }
                ]
            },
            {
                vi: "Đường phố ướt.",
                en_best: "The streets were wet.",
                phrases: [
                    { en: "The streets", vi: "Đường phố" },
                    { en: "were wet", vi: "ướt" }
                ]
            },
            {
                vi: "Tôi pha trà nóng.",
                en_best: "I made hot tea.",
                phrases: [
                    { en: "I made", vi: "Tôi pha" },
                    { en: "hot tea", vi: "trà nóng" }
                ]
            },
            {
                vi: "Tôi ngồi gần cửa sổ.",
                en_best: "I sat near the window.",
                phrases: [
                    { en: "I sat", vi: "Tôi ngồi" },
                    { en: "near the window", vi: "gần cửa sổ" }
                ]
            },
            {
                vi: "Tôi cảm thấy bình yên.",
                en_best: "I felt peaceful.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "peaceful", vi: "bình yên" }
                ]
            },
            {
                vi: "Tôi không vội.",
                en_best: "I was not in a hurry.",
                phrases: [
                    { en: "I was not", vi: "Tôi không" },
                    { en: "in a hurry", vi: "vội" }
                ]
            },
            {
                vi: "Tôi thích nghe tiếng mưa.",
                en_best: "I like listening to the rain.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "listening to", vi: "nghe" },
                    { en: "the rain", vi: "tiếng mưa" }
                ]
            },
            {
                vi: "Sau đó tôi đọc sách.",
                en_best: "Then I read a book.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I read", vi: "tôi đọc" },
                    { en: "a book", vi: "sách" }
                ]
            }
        ]
    },
    {
        id: 23,
        title: "Lesson 23",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Hôm nay tôi nấu ăn. Tôi rửa rau và cắt thịt. Tôi bật bếp và nấu...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Hôm nay tôi nấu ăn.",
                en_best: "Today I cooked.",
                phrases: [
                    { en: "Today", vi: "Hôm nay" },
                    { en: "I cooked", vi: "tôi nấu ăn" }
                ]
            },
            {
                vi: "Tôi rửa rau và cắt thịt.",
                en_best: "I washed vegetables and cut meat.",
                phrases: [
                    { en: "I washed", vi: "Tôi rửa" },
                    { en: "vegetables", vi: "rau" },
                    { en: "and cut", vi: "và cắt" },
                    { en: "meat", vi: "thịt" }
                ]
            },
            {
                vi: "Tôi bật bếp và nấu.",
                en_best: "I turned on the stove and cooked.",
                phrases: [
                    { en: "I turned on", vi: "Tôi bật" },
                    { en: "the stove", vi: "bếp" },
                    { en: "and cooked", vi: "và nấu" }
                ]
            },
            {
                vi: "Mùi thức ăn rất thơm.",
                en_best: "The food smelled very good.",
                phrases: [
                    { en: "The food", vi: "Mùi thức ăn" },
                    { en: "smelled very good", vi: "rất thơm" }
                ]
            },
            {
                vi: "Tôi chuẩn bị bàn ăn.",
                en_best: "I set the table.",
                phrases: [
                    { en: "I set", vi: "Tôi chuẩn bị" },
                    { en: "the table", vi: "bàn ăn" }
                ]
            },
            {
                vi: "Tôi ngồi xuống và ăn.",
                en_best: "I sat down and ate.",
                phrases: [
                    { en: "I sat down", vi: "Tôi ngồi xuống" },
                    { en: "and ate", vi: "và ăn" }
                ]
            },
            {
                vi: "Thức ăn đơn giản nhưng ngon.",
                en_best: "The food was simple but delicious.",
                phrases: [
                    { en: "The food", vi: "Thức ăn" },
                    { en: "was simple", vi: "đơn giản" },
                    { en: "but delicious", vi: "nhưng ngon" }
                ]
            },
            {
                vi: "Tôi cảm thấy no.",
                en_best: "I felt full.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "full", vi: "no" }
                ]
            },
            {
                vi: "Tôi thích ăn cơm ở nhà.",
                en_best: "I like eating rice at home.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "eating rice", vi: "ăn cơm" },
                    { en: "at home", vi: "ở nhà" }
                ]
            },
            {
                vi: "Sau đó tôi dọn dẹp.",
                en_best: "Then I cleaned up.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I cleaned up", vi: "tôi dọn dẹp" }
                ]
            }
        ]
    },
    {
        id: 24,
        title: "Lesson 24",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Buổi sáng tôi tập thể dục. Tôi đi ra ngoài và hít thở sâu. Tôi đi bộ chậm...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Buổi sáng tôi tập thể dục.",
                en_best: "In the morning I exercised.",
                phrases: [
                    { en: "In the morning", vi: "Buổi sáng" },
                    { en: "I exercised", vi: "tôi tập thể dục" }
                ]
            },
            {
                vi: "Tôi đi ra ngoài và hít thở sâu.",
                en_best: "I went outside and took deep breaths.",
                phrases: [
                    { en: "I went outside", vi: "Tôi đi ra ngoài" },
                    { en: "and took", vi: "và hít" },
                    { en: "deep breaths", vi: "thở sâu" }
                ]
            },
            {
                vi: "Tôi đi bộ chậm.",
                en_best: "I walked slowly.",
                phrases: [
                    { en: "I walked", vi: "Tôi đi" },
                    { en: "slowly", vi: "chậm" }
                ]
            },
            {
                vi: "Tôi vươn vai và duỗi người.",
                en_best: "I stretched my shoulders and body.",
                phrases: [
                    { en: "I stretched", vi: "Tôi vươn" },
                    { en: "my shoulders", vi: "vai" },
                    { en: "and body", vi: "và duỗi người" }
                ]
            },
            {
                vi: "Tôi uống nước sau khi tập.",
                en_best: "I drank water after exercising.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" },
                    { en: "after exercising", vi: "sau khi tập" }
                ]
            },
            {
                vi: "Tôi lau mồ hôi.",
                en_best: "I wiped sweat.",
                phrases: [
                    { en: "I wiped", vi: "Tôi lau" },
                    { en: "sweat", vi: "mồ hôi" }
                ]
            },
            {
                vi: "Tôi cảm thấy khỏe hơn.",
                en_best: "I felt healthier.",
                phrases: [
                    { en: "I felt", vi: "Tôi cảm thấy" },
                    { en: "healthier", vi: "khỏe hơn" }
                ]
            },
            {
                vi: "Tôi mỉm cười.",
                en_best: "I smiled.",
                phrases: [
                    { en: "I smiled", vi: "Tôi mỉm cười" }
                ]
            },
            {
                vi: "Tôi thích tập thể dục mỗi ngày.",
                en_best: "I like exercising every day.",
                phrases: [
                    { en: "I like", vi: "Tôi thích" },
                    { en: "exercising", vi: "tập thể dục" },
                    { en: "every day", vi: "mỗi ngày" }
                ]
            },
            {
                vi: "Sau đó tôi ăn sáng.",
                en_best: "Then I ate breakfast.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I ate", vi: "tôi ăn" },
                    { en: "breakfast", vi: "sáng" }
                ]
            }
        ]
    },
    {
        id: 25,
        title: "Lesson 25",
        category: "A1 level",
        categoryId: "everyday",
        filterTopic: "A1 level",
        preview: "Tối nay tôi rất mệt. Tôi về nhà và ngồi xuống. Tôi uống nước và nghỉ...",
        isNew: true,
        attempts: 0,
        data: [
            {
                vi: "Tối nay tôi rất mệt.",
                en_best: "Tonight I was very tired.",
                phrases: [
                    { en: "Tonight", vi: "Tối nay" },
                    { en: "I was", vi: "tôi" },
                    { en: "very tired", vi: "rất mệt" }
                ]
            },
            {
                vi: "Tôi về nhà và ngồi xuống.",
                en_best: "I came home and sat down.",
                phrases: [
                    { en: "I came home", vi: "Tôi về nhà" },
                    { en: "and sat down", vi: "và ngồi xuống" }
                ]
            },
            {
                vi: "Tôi uống nước và nghỉ.",
                en_best: "I drank water and rested.",
                phrases: [
                    { en: "I drank", vi: "Tôi uống" },
                    { en: "water", vi: "nước" },
                    { en: "and rested", vi: "và nghỉ" }
                ]
            },
            {
                vi: "Tôi tắm nước ấm.",
                en_best: "I took a warm bath.",
                phrases: [
                    { en: "I took", vi: "Tôi tắm" },
                    { en: "a warm bath", vi: "nước ấm" }
                ]
            },
            {
                vi: "Tôi thay quần áo thoải mái.",
                en_best: "I changed into comfortable clothes.",
                phrases: [
                    { en: "I changed into", vi: "Tôi thay" },
                    { en: "comfortable clothes", vi: "quần áo thoải mái" }
                ]
            },
            {
                vi: "Tôi nằm trên giường.",
                en_best: "I lay on the bed.",
                phrases: [
                    { en: "I lay", vi: "Tôi nằm" },
                    { en: "on the bed", vi: "trên giường" }
                ]
            },
            {
                vi: "Mọi thứ rất yên tĩnh.",
                en_best: "Everything was very quiet.",
                phrases: [
                    { en: "Everything", vi: "Mọi thứ" },
                    { en: "was very quiet", vi: "rất yên tĩnh" }
                ]
            },
            {
                vi: "Tôi nhắm mắt.",
                en_best: "I closed my eyes.",
                phrases: [
                    { en: "I closed", vi: "Tôi nhắm" },
                    { en: "my eyes", vi: "mắt" }
                ]
            },
            {
                vi: "Tôi muốn ngủ sớm.",
                en_best: "I wanted to sleep early.",
                phrases: [
                    { en: "I wanted", vi: "Tôi muốn" },
                    { en: "to sleep", vi: "ngủ" },
                    { en: "early", vi: "sớm" }
                ]
            },
            {
                vi: "Sau đó tôi tắt đèn.",
                en_best: "Then I turned off the light.",
                phrases: [
                    { en: "Then", vi: "Sau đó" },
                    { en: "I turned off", vi: "tôi tắt" },
                    { en: "the light", vi: "đèn" }
                ]
            }
        ]
    }
];
