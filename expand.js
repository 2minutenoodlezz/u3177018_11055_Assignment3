
document.addEventListener('DOMContentLoaded', function () {
    var timelineContainers = document.querySelectorAll('.container');

    var timelineData = {
        '1851': 'February 6, 1851. The day known as "Black Thursday". It was the first catastrophic bushfire experienced by the European settlers. It burnt around a quarter of the colony in Victoria but only had 12 known deaths likely due to the small population at the time. However, the losses of domesticated animals were not as fortunate as 1 million sheep and thousands of cattle were estimated to be lost in the fires. "Black Thursday" had the highest recorded temperature for that bushfire season at 43.3 degrees Celsius in the shade.',
        '1898': 'Claiming 12 lives, destroying over 2000 buildings and leaving 2500 people homeless were the bushfires of early 1898. Being named the "Red Tuesday bushfires", the worst of it took place on February 1, 1898. The fires detroyed a total area of 260000 hectares or 640000 acres of bushland and farmland in the southern are of Gippsland, Victoria. After this event, the establishment of The Royal Commission on State Forests and Timber Reserves – Fire Protection in Country Districts occured which highlighted a number of obsercations and recommendations to reduce risks of bushfires which are still relevant today.',
        '1905-1906': 'Another devastating bushfire which occured throughout January of 1906 in Victoria and Southern Australia. This particular bushfire recorded temperatures reaching up to 51 degress Celsius. The fires left 56 families with nothing, took the live of 6 children from 1 family due to suffocation near Mount Best, and the lives of another 6 people in the surrounding areas.',
        '1926': 'This bushfire season start in late January and ended early to mid March of the year 1926. The fires claimed the lives of 60 people, destroyed around 1000 buildings and burned an estimated area of 400000 hectares of forest. Febuary 14 was the worst day of the season, as it was the day that 31 of the 60 lives were lost in Wamburton near Melbourne.',
        '1932': 'The worst of the fires of this year occured on February 4 where the fires swept from Wamburton to northern Gippsland. These fires took the lives of 9 people, including 2 firefighters. The fires were eventually stopped by heavy rain after a long fight.',
        '1938-1939': 'The year of the infamous "Black Firday" bushfires. These bushfires claimed the lives of 71 people as well as destroying 1000 homes and 69 businesses. These fires were believed to be a result of several years worth of drought which were followed by the high temperatures and windspeeds. The fires swept across the mountains of north-eat Victoria and the south-western coastline. On "Black Firday", January 13, the highest recorded temperature was 47.2 degress Celsius and the fires claimed the lives of 36 out of the 71 lost over the course of January.',
        '1943-1944': 'With only 46mm of rainfall, this was the driest summer Melbourne had ever had. With World War II well under way, many of the fire fighting personnel were no present within the country, resulting in bushfires worse than usual for the scope of the fires at the time. With a death toll of 51 and 650 buildings destroyed across Victoria, it was certainly devastating event for those staying in the country.',
        '1951-1952': 'The death toll for this fire season was 13 but that was not the full extent of the disaster for this season. Raging from October 1951 to 1952, the fires burned 4.5 million hectares across western New South Wales and 10000 hectares in the Australian Capital Territory, resulting in a monstrous estimated insurance loss of 6 million pounds at the time.',
        '1955': 'Referred to as "Black Sunday" these fires raged in the Mount Lofty Ranges, just east of Adelaide. With the highest recorded temperature of 43 degress Celsius and gusts of 100km within the city of Adelaide, it was even worse within the hills. These fires caused a heft insurance loss of 4 million pounds at the time and took the lives of 2 brave firefighters.',
        '1962': 'These fires took the lives of 9 unfortunate people and destroyed just over 600 homes in Victoria. Lightning strikes were the cause of majority of the fires but 2 of them were lit by arsonists. The fires also came dangerously close to Melbourne city itself, being only 18 kilometres away.',
        '1965': 'This year saw bushfires in the Longwood and Gippsland regions of Victoria. Longwood had less affected areas and less damage incurred. However, one family of 7 lost their lives when they were undertaking a late evacuation. In Gippsland, the 300000 hectares of forest and 15000 hectares of grassland with more than 60 buidlings destroyed and 3 fatalities.',
        '1967': 'The Tasmanian bushfires during this year were devastating as they took the lives of 62 people and destroyed almost 1300 homes, leaving 7000 homeless. With more than 260000 heactares of land affected, the economy was heavily imapcted as thousands of chickens and sheep were killed alongside other livestock. This damage resulted in damage estimated to be worth around $14 million. These fires would leave a lasting impact as the day that they unleashed their destruction would later be referred to as "Black Tuesday".',
        '1969': 'On January 8th, a disastrous fire, that flared up again after being previously extinguished, quickly approached the Melbourne-Geelong Expressway. In addition to destroying a 90 year old gothic church and 40 houses, it also caused the death of 17 people who tried to escape by leaving their cars and outrunning the fire. However, 6 people who remained sheltered in their cars survived which caused a change in the guidelines, recommending people to stay in their cars should they be caught in a bushfire. Additionally, other fires on this day burnt to the edge of suburban Melbourne, claiming the lives of an additional 6 people and destroying around another 200 homes and 20 buidling.',
        '1974-1975': 'This season was the worst bushfire season in 30 years, with 117 million hectares of Australian land mass taking damage from the fires. This is around 15% of Australian land. Considering the amount of land affected, Australians were rather fortunate as there were only 3 recorded fatalities and the damage cost only amounted to $5 million, especially when compared to the likes of "Black Tuesday".',
        '1977': 'Having burnt down 116 houses, 340 buidling and more than 100000 hectares of land, these fires do not look as bad as some of the previous fires. However, the damage caused by the fires amounted to around $9 million. These fires also took the lives of 4 unfortunate people and 7 were believed to have suffered heart attacks from these fires.',
        '1983': 'These fires were know as the "Ash Wednesday" bushfires and they raged across the states of Victoria and South Australia. With the area experiencing a drought 10 months prior to these fires, a few heatwaces, low humnidity and strong winds up to 110km/h were enough to create devastating fires. These fires taht burned through over 300000 hectares of land were enough to cause a death toll of 75, destroy 2000 homes and incur insurance costs of $176 million. These losses were one of the worst in all of Australian bushfire history.',
        '1984': 'This bushfire season at the end of the year was the worst season that New South Wales had experienced in the past decade. Burning though approximately 3.5 million hecatres of land, this bushfire season caused damages worth around $25 million due to heavily damaging farming communities including crops, plantations, machinery and around 40000 livestock. In addition to those damages, it also claimed 4 lives.',
        '1985': 'In central Victoria and the alpine region, these fires started predominantly from lightning strikes, burning over 100000 hectares of land. Though relatively smaler compared to the bushfires in previous years, these bushfires destroyed 180 homes and too the lives of 3 people.',
        '1994': 'These fires were predominantly referred to as the "Eastern Seaboard" fires. Affecting over 800000 hectares of land, the fires raged from Batemans Bay all the way to the Queensland border. 4 fatalities were recorded during these fires, 3 of which were firefighters. With over 200 homes and 19 businesses destroyed, these fire caused damage equating to $59.1 million. The firefighting efforts this season were amongst the largest in Australian history and led to the formation of the New South Wales Rural Fire Service.',
        '1997': 'In January, fires were seen in areas in Victoria, Western Australia and New South wales. 69 homes were destroyed over the 3 areas, as well as 7 fatalities. In just Victoria, the damages amounted to $29 million.',
        '2001-2002': '"Black Christmas" was a devastating period where over 750000 hectares of land was burnt, destroying 109 houses and many more buildings. Over 20000 firefighters were required to fight these fires over 23 days. Despite their efforts, the fires still caused damage amounting to $69 million. Additionally, the air pollution from the smoke and smog was recorded as the worst ever in Sydney on December 28.',
        '2002-2003': 'This bushfire season started from December 2002 and lasted until March 2003. The fires of the season burned over 21.2 million hectares of land, destoryed 41 houses, and claimed the lives of 7, 4 of which were lost during the Canberra bushfires of January 2003.',
        '2006': 'In January, more that 500 fires raged across areas of Victoria, burning 160000 hectares of land and destroying 57 homes and 359 farm buildings. This amounted to around $22 million worth of damage. Additionally there were 4 recorded fatalities and 6 injuries.',
        '2006-2007': 'The fires of this season began on December 1 and after the firefighting efforts of thousands of personnel over 69 days, the flames were finally quelled. The resulting damage was the almost 1.3 million hectares of land burnt, 51 homes destoryed, and although there was only 1 fatality, over 1400 firefighters were injured during the firefighting efforts. On December 20, the worse bushfire smokes since record began was recorded, as Melbourne experienced visibility begin reduced to 2km in its central business district.',
        '2009': 'Known as the "Black Saturday" bushfires, this was one of the worst bushfire seasons in Australian history. These fires destroyed over 2000 homes and destroyed 61 businesses over the 450000 hectares of land they scorched. These fires also took the lives of 173 people, the largest death toll from a bushfire to date. The total damage costs caused by these fires were estimated to be around $1.07 billion, the highest amount so far by a large margin. All of these losses made it so that these fires were often referred to as the worst natural disaster in Australian history.',
        '2013-2014': 'This bushfire season saw the worst bushfire season for New South Wales since the 1960s at the time. It was also very destructive in terms of property loss, with 371 houses destroyed. Across the country, 4 fatalities were recorded with 2 of them being in New South Wales. Just the New South Wales fires alone incurred an estimated cost of $94 million worth in damage.',
        '2015': 'Beating out the 2013-2014 season in destructiveness in terms of property loss, these fires destroyed over 400 houses across the almost 300000 hectares of land that they effected. 8 fatalities were recorded due to the fire this season and an additional 1 who was a volunteer firefighter that passed due to unrelated health issues.',
        '2019-2020': 'With over 24 million hectares of land burnt across all states and territories, over 9000 builings destroyed (including around 3500 homes), and 34 recorded fatalities, the fires of "Black Summer" were definitely one of the worst recorded in Australian history. Air pollution was at its worst during this season, with all southern and eastern states having air quality drop down to hazardous levels. In fact, the smoke from these fires were so bad that it began travelling across the South Pacific Ocean and affecting the weather conditions in other continents. This change in air quality also claimed the lives of another 445 through smoke inhalation.'
    };

    var originalContent = {};

    timelineContainers.forEach(function (container) {
        var id = container.getAttribute('id');
        originalContent[id] = container.querySelector('.content').textContent;

        // on mouse hover, display the content
        container.addEventListener('mouseover', function () {
            var contentElement = container.querySelector('.content');
            contentElement.textContent = timelineData[id];
            contentElement.style.color = 'black';
            contentElement.style.fontFamily = '"Georgia", serif';
            contentElement.style.fontSize = '1vw'
        });

        // reset to original content
        container.addEventListener('mouseleave', function () {
            var contentElement = container.querySelector('.content');
            contentElement.textContent = id
            contentElement.style.color = 'black';
            contentElement.style.fontFamily = '"Brush Script MT", cursive';
            contentElement.style.fontSize = '2vw'
        });
    });
});

// get element under mouse cursor
function getElement(event) {
    var x = event.clientX;
    var y = event.clientY;
    var element = document.elementFromPoint(x, y);

    if (element && element.classList.contains('container')) {
        var id = element.getAttribute('id');
        var contentElement = element.querySelector('.content');
        contentElement.textContent = timelineData[id] || id;
    }
}

