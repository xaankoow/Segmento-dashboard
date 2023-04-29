import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setDiscountPrice, setFormatPrice } from "../FORMAT/price";

export default function DiscountTagValue({
  tagStatusName,
  price,
  planSelected,
}) {
  const { discountStatus } = useSelector((state) => state.planState);

  const [preview, setPreview] = useState({
    originalPrice: "",
    priceAfterTheDiscount:
      setFormatPrice(price.default_discount_price) + "  تومان",
  });

  useEffect(() => {
    let funDisValue = setDiscountPrice(
      price.price,
      discountStatus.value,
      discountStatus.discountType == "cash" ? true : false
    );
    setPreview({
      originalPrice:
        price.default_discount != 0
          ? setFormatPrice(price.price) + "  تومان"
          : "",
      priceAfterTheDiscount:
        setFormatPrice(price.default_discount_price) + "  تومان",
    });
    if (
      discountStatus.value != 0 &&
      (funDisValue.value < price.default_discount) |
        (price.default_discount == 0)
    ) {
      if (discountStatus.planType == tagStatusName) {
        setPreview({
          originalPrice: setFormatPrice(price.price) + "  تومان",
          priceAfterTheDiscount:
            setFormatPrice(
              setDiscountPrice(
                price.price,
                discountStatus.value,
                discountStatus.discountType == "cash" ? true : false
              ).value
            ) + "  تومان",
        });
      }
    }
  }, [discountStatus.value, price, planSelected]);

  return (
    <div className="price relative">
      <span className=" absolute bottom-12 line-through w-full text-xs right-0">
        {preview.originalPrice}
      </span>
      <p
        style={
          planSelected.type.substring(0, 1) == tagStatusName.substring(0, 1)
            ? { color: "rgba(10, 101, 205, 1)" }
            : null
        }>
        {preview.priceAfterTheDiscount}
      </p>
    </div>
  );
}
