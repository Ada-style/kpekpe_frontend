import { useSearchParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { cn } from "@/lib/utils";
import { Save } from "lucide-react";

const TABS = [
  { id: "infos", label: "Informations" },
  { id: "scolaire", label: "Situation scolaire" },
  { id: "prefs", label: "Préférences" },
  { id: "securite", label: "Sécurité" },
];

export default function WebProfil() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "infos";
  const setTab = (id: string) => setParams({ tab: id });

  return (
    <WebLayout breadcrumbs={[{ label: "Mon profil" }]}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl kpe-gradient-primary text-primary-foreground font-display font-black text-xl flex items-center justify-center">
            S
          </div>
          <div>
            <h1 className="font-display text-3xl font-black">Schoolvi</h1>
            <p className="text-muted-foreground text-sm">Terminale D · Lomé</p>
          </div>
        </div>

        <div className="border-b border-border flex gap-1 overflow-x-auto kpe-scrollbar-hide">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-12 px-5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition",
                tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "infos" && <FormInfos />}
          {tab === "scolaire" && <FormScolaire />}
          {tab === "prefs" && <FormPrefs />}
          {tab === "securite" && <FormSecurite />}
        </div>
      </div>
    </WebLayout>
  );
}

function Field({ label, defaultValue, disabled }: { label: string; defaultValue?: string; disabled?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-2">{label}</label>
      <input
        disabled={disabled}
        defaultValue={defaultValue}
        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none disabled:bg-muted disabled:cursor-not-allowed"
      />
    </div>
  );
}

function SaveBtn() {
  return (
    <button className="h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
      <Save className="w-4 h-4" /> Enregistrer les modifications
    </button>
  );
}

function FormInfos() {
  return (
    <div className="space-y-5 max-w-xl">
      <Field label="Prénom" defaultValue="Schoolvi" />
      <Field label="Nom" defaultValue="Togovi" />
      <Field label="Email (non modifiable)" defaultValue="schoolvi@example.com" disabled />
      <Field label="Langue de l'interface" defaultValue="Français" />
      <SaveBtn />
    </div>
  );
}

function FormScolaire() {
  return (
    <div className="space-y-5 max-w-xl">
      <p className="text-sm text-muted-foreground bg-muted rounded-lg p-3">
        Ces informations influencent tes recommandations. Mets-les à jour à chaque changement.
      </p>
      <Field label="Région du Togo" defaultValue="Maritime" />
      <Field label="Niveau d'études" defaultValue="Lycée — Terminale" />
      <Field label="Série" defaultValue="D" />
      <SaveBtn />
    </div>
  );
}

function FormPrefs() {
  return (
    <div className="space-y-5 max-w-xl">
      {["Recevoir les nouveautés Kpékpé", "Recevoir des suggestions personnalisées de Kpékpé", "Autoriser l'utilisation anonyme pour améliorer la plateforme"].map((l) => (
        <label key={l} className="flex items-start gap-3 p-4 rounded-xl border border-border cursor-pointer hover:bg-muted/50">
          <input type="checkbox" defaultChecked className="mt-1" />
          <span className="text-sm">{l}</span>
        </label>
      ))}
      <SaveBtn />
    </div>
  );
}

function FormSecurite() {
  return (
    <div className="space-y-5 max-w-xl">
      <Field label="Mot de passe actuel" />
      <Field label="Nouveau mot de passe" />
      <Field label="Confirmer le nouveau mot de passe" />
      <SaveBtn />
      <div className="pt-8 border-t border-border">
        <p className="text-sm font-semibold text-destructive">Zone dangereuse</p>
        <button className="mt-3 h-10 px-4 rounded-lg border border-destructive/50 text-destructive text-sm font-medium hover:bg-destructive/5">
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
