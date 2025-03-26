import Blog from "@/components/Blog/Blog";
import { getBlogs } from "@/utilit/getData/getBlogs";

export async function generateMetadata({ params }) {
  return {
    title: "Blogs | المدونة",
    description: "Desktop App",
  };
}

// const dataBlog = [
//   {
//     id: 1,
//     title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
//     desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
//     titleEn:
//       "How to Choose a Website Design That Reflects Your Brand Identity?",
//     descEn:
//       "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
//     image: img1,
//   },
//   {
//     id: 2,
//     title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
//     desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
//     titleEn:
//       "How to Choose a Website Design That Reflects Your Brand Identity?",
//     descEn:
//       "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
//     image: img1,
//   },
//   {
//     id: 3,
//     title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
//     desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
//     titleEn:
//       "How to Choose a Website Design That Reflects Your Brand Identity?",
//     descEn:
//       "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
//     image: img1,
//   },
//   {
//     id: 4,
//     title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
//     desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
//     titleEn:
//       "How to Choose a Website Design That Reflects Your Brand Identity?",
//     descEn:
//       "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
//     image: img1,
//   },
//   {
//     id: 5,
//     title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
//     desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
//     titleEn:
//       "How to Choose a Website Design That Reflects Your Brand Identity?",
//     descEn:
//       "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
//     image: img1,
//   },
//   {
//     id: 6,
//     title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
//     desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
//     titleEn:
//       "How to Choose a Website Design That Reflects Your Brand Identity?",
//     descEn:
//       "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
//     image: img1,
//   },
// ];
const BlogPage = async () => {
  const { AllBlogs } = await getBlogs();

  return (
    <>
      <Blog dataBlog={AllBlogs} />
    </>
  );
};

export default BlogPage;
