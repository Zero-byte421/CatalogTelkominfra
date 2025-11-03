import AppCard from "../AppCard";
import kepoIcon from "@assets/generated_images/KEPO_app_icon_34d932fe.png";

export default function AppCardExample() {
  const sampleApp = {
    id: "kepo",
    name: "KEPO",
    description: "Platform digital terintegrasi sebagai repository dokumen acceptance dan pengelolaan penagihan end-to-end.",
    url: "https://kepo.telkominfra.com/login",
    icon: kepoIcon,
    category: "Document Management",
    features: [
      "Digital signature & e-Materai integration",
      "End-to-end billing management"
    ]
  };

  return (
    <div className="p-8 max-w-sm">
      <AppCard app={sampleApp} />
    </div>
  );
}
