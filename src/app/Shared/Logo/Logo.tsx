import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const lightUrl = `https://brbr.tn/wp-content/uploads/2025/03/logo-brbr-vendeur-inverse-xs.png`;
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={lightUrl}
          width={150}
          height={40}
          alt="Logo-Image-brbr-tn"
        />
      </Link>
    </div>
  );
};

export default Logo;
