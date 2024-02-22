"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("fr-FR", {
    style: 'currency',
    currency: 'EUR',
  });

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    } 

  return (
    <div className="font-semibold text-black dark:text-white">
        {formatter.format(Number(value))}
    </div>
  );
};
export default Currency