import React, { useState } from "react";
const variables = [
  {
    title: "Product Description",
    paragraph:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.</p><br /><p>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.</p><br /><p>Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.</p>",
  },
  {
    title: "Related Products",
    paragraph:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.</p><br /><p>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.</p><br /><p>Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.</p>",
  },
  {
    title: "Ratings and Reviews",
    paragraph:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.</p><br /><p>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.</p><br /><p>Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.</p>",
  },
];

function ProductDescription() {
  const [activeTabs, setActiveTabs] = useState(0);
  return (
    <>
      <div className=" px-4 py-2 bg-zinc-100 rounded-sm justify-start items-center gap-2 md:gap-4 inline-flex mt-[55px] overflow-x-scroll w-full">
        {variables.map((item, index) => (
          <button
            className={`text-xs md:text-base  min-w-28  md:min-w-max font-medium font-['Inter']  px-[18px] py-1.5 rounded-lg  ${
              activeTabs === index
                ? " bg-primary text-white  "
                : " text-zinc-600  leading-tight hover:bg-neutral-500 hover:text-white hover:ease-in duration-300"
            }`}
            key={index}
            onClick={() => setActiveTabs(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div>
        <div
          className="max-w-[1134px] text-zinc-600 text-sm md:text-base font-medium font-['Inter'] leading-tigh pt-4 pl-5 mb-[121px]"
          dangerouslySetInnerHTML={{ __html: variables[activeTabs].paragraph }}
        ></div>
      </div>
    </>
  );
}

export default ProductDescription;
