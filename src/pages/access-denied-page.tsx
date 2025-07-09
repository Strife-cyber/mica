import { AccessDeniedVariants, VariantKey } from "@/lib";

type Props = {
  variant: VariantKey;
};

export default function AccessDeniedPage({ variant }: Props) {
  const VariantComponent = AccessDeniedVariants[variant].component;

  return <VariantComponent />;
}
