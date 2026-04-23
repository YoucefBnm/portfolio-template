import { ServiceT } from "@/types";
import { SectionTitle } from "../section-title";
import { Badge } from "../ui/badge";
import { SERVICES } from "@/data";
import Image from "next/image";

function ServiceRow({ service }: { service: ServiceT }) {
  return (
    <div className="group cursor-pointer relative border-b hover:bg-popover hover:text-popover-foreground duration-200 ease-out transition-colors flex justify-between px-6 py-4 flex-wrap gap-4">
      <div className="flex-1 space-y-2 flex flex-col">
        {service.focus.map((focus) => (
          <Badge variant={"secondary"} className="rounded-full" key={focus}>
            {focus}
          </Badge>
        ))}
      </div>
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/4 w-60 h-fit overflow-hidden transition-[clip-path] delay-100 duration-400 ease-out [clip-path:polygon(50%_50%,50%_50%,50%_50%,50%_50%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
        <Image
          className="flex-1 object-cover"
          src={service.serviceImage}
          alt={service.label}
          width={462}
          height={294}
          quality={75}
          sizes="(max-width: 768px) 50vw, 462px"
          priority
        />
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-medium">{service.label}</h3>
        <p className="text-muted-foreground text-sm text-balance">
          {service.solution}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="pb-16 space-y-8">
      <SectionTitle>Offered services</SectionTitle>

      <div className="max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <ServiceRow key={service.label} service={service} />
        ))}
      </div>
    </section>
  );
}
