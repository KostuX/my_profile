import EmblaCarousel from "../../../emblaCarousel/Embla";
import Autoplay from "embla-carousel-autoplay";

export function Project_huffman() {
  const OPTIONS = { loop: true };
  const OPTIONS2 = [Autoplay({ delay: 10000 })];

  const SLIDES = [
    { src: "./projectImg/huffman/app.png", description: "" },
    {
      src: "./projectImg/huffman/Huffman_tree.png",
      description:
        "Huffman tree  -  example from https://en.wikipedia.org/wiki/Huffman_coding",
    },
    {
      src: "./projectImg/huffman/DefaultTree.png",
      description:
        "A Huffman tree that has been constructed using the default dataset utilized in this application.",
    },
  ];
  return (
    <>
      <div className=" sm:flex mx-5">
        <div className="flex mx-5 sm:w-1/2 justify-center ">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            options2={OPTIONS2}
          />
        </div>
        <div className="mt-12 sm:mt-2 sm:w-1/2 ">
          <div>
            <b>Project:</b> Huffman Coding
          </div>
          <div>
            <b>Language:</b> Java
          </div>
          <div>
            <b>Purpose:</b> Text Encoding/Compression
          </div>
          <div>
            <b>Source code:</b> https://github.com/KostuX/huffman.git
          </div>
          <div className="mt-6">
            Huffman coding is a scheme that assigns variable-length bit-codes
            (binary strings) to characters, such that the lengths of the codes
            depend on the frequencies of the characters in a typical message. As
            a result, encoded messages take less space (as compared to
            fixed-length encoding such as ASCII or UNICODE) since the letters
            that appear more frequently are assigned shorter codes. This is
            performed by first building a Huffman coding Tree based on a given
            set of frequencies. From the tree, bit-codes for each character are
            determined and then used to encode a message. The tree is also used
            to decode an encoded message as it provides a way to determine which
            bit sequences translate back to a character.
          </div>
        </div>
      </div>
    </>
  );
}
