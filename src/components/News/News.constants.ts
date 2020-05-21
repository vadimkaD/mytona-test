import girl1 from "./images/cb-girl-1.png";
import girl2 from "./images/cb-girl-2.jpg";
import girl3 from "./images/cb-girl-3.jpg";
import girl4 from "./images/cb-girl-4.jpg";
import girl5 from "./images/cb-girl-5.jpg";
import girl6 from "./images/cb-girl-6.png";
import { NewsItem } from "../NewsItem/NewsItem.types";

const girls = [girl1, girl2, girl3, girl4, girl5, girl6];

const news: NewsItem[] = [];

export const NEWS_COUNT = 36;
export const NEWS_PAGES_COUNT = 6;

for (let i = 0; i < NEWS_COUNT; i++) {
  const newsItem: NewsItem = {
    title: `Cyberpunk returns: Advent #${i}`,
    link: `cyberpunk-girl-${i}`,
    textPreview: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis ante in enim egestas lobortis. Vivamus in nisl tincidunt, aliquet leo gravida, accumsan dolor. Aenean gravida porttitor nulla quis fermentum. Vestibulum lectus dolor, consequat ut libero id, ornare facilisis ipsum. Pellentesque eu euismod libero. Integer in lobortis quam. Curabitur pulvinar tellus nec eros eleifend, et mattis lectus pellentesque. Curabitur sed massa pretium, hendrerit nibh vel, vehicula sapien. Sed pharetra id nunc vitae dapibus.

Duis porttitor arcu ex, non bibendum augue condimentum et. Etiam finibus molestie nunc, eget venenatis quam tempus elementum. Vivamus dolor turpis, aliquet sed lectus in, efficitur tincidunt nulla. Sed varius risus a mauris dignissim sodales. Nullam at lorem erat. Nunc et ante id nibh rhoncus vehicula in ac leo. Pellentesque eros velit, suscipit sed mi quis, dignissim venenatis dolor. Praesent blandit mauris ex, euismod molestie ante blandit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum sed nisl quis tristique. Etiam finibus ligula in consequat semper. Morbi in elit mauris. Aenean nec euismod mauris. Suspendisse potenti. Cras felis erat, cursus in finibus at, rhoncus sed tellus. Fusce mi felis, aliquet at lectus a, consequat placerat nibh.

Donec lacus metus, laoreet sit amet risus nec, gravida varius neque. Mauris at sem ligula. Cras id feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus, lacus quis pharetra consectetur, arcu erat auctor purus, et eleifend purus massa sagittis justo. Nullam maximus feugiat accumsan. Quisque sit amet dui pulvinar, lobortis felis hendrerit, vulputate tellus. Nulla facilisi. Donec facilisis auctor massa, vel euismod urna venenatis non. Integer bibendum vitae erat et volutpat. Vestibulum sagittis neque at lectus fermentum euismod. Morbi tellus dolor, interdum non commodo a, lacinia sit amet ante. Ut porta orci vitae velit posuere molestie. Nulla neque ex, fermentum sed ornare id, molestie et elit.

Donec eget massa eget nisi finibus placerat vitae volutpat nibh. Aenean eget mattis urna, at varius velit. Aenean ullamcorper vel magna id sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et velit lectus. Proin in risus commodo, commodo dolor sit amet, egestas purus. Sed convallis mauris vitae diam eleifend, nec venenatis odio fringilla. Duis ut aliquet ligula. Aliquam lectus magna, molestie eget tortor id, sollicitudin commodo purus. Etiam scelerisque, lacus nec pharetra rhoncus, ex orci consequat sem, vel aliquam lorem leo a nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis auctor ligula at sem ultricies, a dignissim dui dignissim. Nunc maximus orci quis fringilla consectetur. Sed scelerisque dapibus sem, eget mattis massa volutpat non. Duis justo sapien, condimentum dapibus lectus eget, tempor ultrices massa. Fusce scelerisque dolor a sapien aliquam, quis eleifend nibh faucibus.

In sed pharetra ex. Nullam tellus elit, cursus vel tempor sit amet, facilisis nec velit. Proin finibus commodo commodo. Vivamus porttitor id sem et tincidunt. Vivamus cursus bibendum nisi, non laoreet orci auctor ut. Cras auctor nisl vel laoreet posuere. Suspendisse auctor tortor nec odio tincidunt, vel fringilla nulla sodales. Nam auctor, sem a gravida fringilla, felis purus tincidunt metus, sit amet consequat nulla magna a metus. Morbi quis viverra nunc. Vestibulum non risus vel lacus tempus tincidunt.`,
    imageUrl: girls[i % 6]
  };

  news.push(newsItem);
}

export { news };
