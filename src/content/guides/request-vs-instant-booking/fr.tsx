import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const RESPOND_URL = 'https://www.airbnb.fr/help/article/28'

export default function Guide() {
  return (
    <GuideLayout
      slug="request-vs-instant-booking"
      lang="fr"
      sources={[
        {
          label: "Airbnb, Centre d'aide : Répondre à une demande de réservation de votre logement (consulté en octobre 2026)",
          href: RESPOND_URL,
        },
      ]}
    >
      <Summary>
        <Li>La demande de réservation vous laisse examiner chaque réservation avant de la confirmer. La réservation instantanée confirme tout de suite.</Li>
        <Li>La réservation instantanée demande moins au client. La demande vous demande plus à vous : répondre vite, à chaque fois.</Li>
        <Li>Quelques chambres et un accueil en personne se prêtent souvent aux demandes. Des créneaux fixes à capacité limitée, plutôt à l'instantané.</Li>
        <Li>Rien ne vous oblige à choisir une fois pour toutes : beaucoup d'hôtes combinent les deux selon les dates, le délai ou le type de séjour.</Li>
      </Summary>

      <H2>Ce que chaque mode change, pour le client et pour vous</H2>
      <P>
        Avec la <B>demande de réservation</B>, le client choisit ses dates ou son créneau, le nombre de personnes et les
        options, puis envoie sa demande. Rien n'est encore confirmé. Vous la lisez, puis vous acceptez, proposez une autre
        date ou refusez. En attendant, le client patiente avant d'arrêter ses projets.
      </P>
      <P>
        Avec la <B>réservation instantanée</B>, le client voit ce qui est libre, choisit, et la réservation est confirmée
        sur-le-champ, en général avec un paiement ou un acompte au même moment. Vous l'apprenez après coup. Votre rôle ne
        consiste plus à trancher réservation par réservation, mais à fixer les règles à l'avance : quelles dates sont
        ouvertes, quel délai de prévenance il vous faut, quelles conditions s'appliquent.
      </P>
      <P>
        Aucun des deux n'est meilleur dans l'absolu : l'un place l'effort au quotidien, l'autre dans le calendrier et
        les règles.
      </P>

      <H2>Ce que l'on gagne, ce que l'on perd</H2>
      <P>
        Aujourd'hui, la plupart des gens ont l'habitude de réserver une chambre ou un cours en quelques gestes. Un
        formulaire qui se termine par « nous revenons vers vous » est un pas en arrière, et certains continuent de chercher
        ailleurs en attendant. En échange, la demande vous donne un contrôle que l'instantané ne donne pas : vous savez qui
        arrive avant de vous engager.
      </P>
      <Table
        caption="Les deux modes comparés"
        head={['', 'Demande de réservation', 'Réservation instantanée']}
        rows={[
          ['Pour le client', 'Attend la réponse et peut continuer à chercher', 'Certitude immédiate'],
          ['Contrôle sur qui réserve', 'Total : vous décidez au cas par cas', "Par des règles fixées à l'avance"],
          ['Calendrier', 'Vérifiable à la main avant de confirmer', 'Doit être juste en permanence'],
          ['Votre engagement', 'Répondre vite à chaque demande', 'Honorer toute réservation que le calendrier accepte'],
          ['Moment du paiement', 'Après votre confirmation', 'Au moment de la réservation'],
        ]}
      />
      <P>
        Le calendrier est le point que beaucoup d'hôtes sous-estiment. Si votre gîte est aussi proposé sur des plateformes
        et que les calendriers sont reliés par des flux qui se mettent à jour à intervalles réguliers, et non en temps réel,
        la réservation instantanée peut laisser deux clients prendre la même nuit entre deux mises à jour. Avec les
        demandes, vous repérez le problème avant de dire oui.
      </P>
      <P>
        Le moment du paiement compte aussi. En instantané, le client engage de l'argent en réservant, ce qui écarte les
        simples curieux. Avec une demande, rien n'est payé tant que vous n'avez pas confirmé : il faut donc une étape
        suivante claire pour le paiement, sans quoi un client déjà accepté peut encore se désister.
      </P>

      <H2>Quand la demande de réservation s'impose</H2>
      <P>
        Prenez des chambres d'hôtes dans le Luberon, quatre chambres, où la propriétaire accueille chaque client en personne
        et ne peut assurer les arrivées qu'à certaines heures. Deux chambres partagent une salle d'eau, la maison ne convient
        pas aux jeunes enfants et elle préfère échanger avec ceux qui restent une semaine ou plus. Ici, la demande a tout son
        sens : chaque réservation est une conversation, et une mauvaise réservation coûte plus cher qu'une réservation lente.
      </P>
      <Ul>
        <Li>Peu d'unités, où une seule erreur pèse lourd.</Li>
        <Li>Des arrivées à organiser : remise des clés, arrivée tardive, route de montagne ou traversée en bateau.</Li>
        <Li>Groupes, animaux, fêtes ou longs séjours qu'il vaut mieux examiner avant d'accepter.</Li>
        <Li>Un calendrier partagé avec d'autres canaux que vous ne pouvez pas encore tenir parfaitement à jour.</Li>
        <Li>Des offres sur mesure : visites privées, menus particuliers, séjours à forfait.</Li>
      </Ul>

      <H2>Quand la réservation instantanée s'impose</H2>
      <P>
        Prenez maintenant un club de padel avec quatre terrains et des créneaux d'une heure et demie, ou un studio de
        pilates avec douze places par cours. Chaque créneau est le même produit, la capacité est fixe et personne n'a besoin
        d'être sélectionné pour jouer un match ou suivre un cours. Faire attendre une réponse à quelqu'un qui veut un terrain
        à 19 heures ne fait qu'ajouter des frictions, et le créneau risque de rester vide pendant que la demande dort dans un
        téléphone.
      </P>
      <Ul>
        <Li>Des produits standard : même type de chambre, même cours, même durée.</Li>
        <Li>Une capacité fixe que le système compte pour vous.</Li>
        <Li>Des délais courts : des clients qui réservent pour ce soir ou demain matin.</Li>
        <Li>Un calendrier tenu en un seul endroit, pour que ce qui apparaît libre le soit vraiment.</Li>
        <Li>Des conditions claires que vous êtes prêt à appliquer sans les discuter au cas par cas.</Li>
      </Ul>

      <H2>Les formules mixtes</H2>
      <P>Beaucoup d'établissements finissent quelque part entre les deux. Quelques combinaisons courantes :</P>
      <Ul>
        <Li>
          <B>Instantané pour certains, demande pour d'autres.</B> Les chambres doubles se réservent directement, la suite
          familiale ou le gîte entier passe par une demande. Les cours collectifs sont en instantané, les cours particuliers
          sur demande.
        </Li>
        <Li>
          <B>Selon le délai ou la saison.</B> Les réservations anticipées sont instantanées, celles de dernière minute
          passent par une demande parce que vous devez savoir si vous serez là. Ou l'inverse en haute saison, quand vous
          voulez combler chaque trou au plus vite.
        </Li>
        <Li>
          <B>Demande avec délai de réponse annoncé.</B> Vous gardez les demandes, mais vous indiquez sur la page quand le
          client aura une réponse, par exemple dans les quelques heures en journée. Une promesse claire enlève l'essentiel
          de l'inconfort de l'attente.
        </Li>
        <Li>
          <B>Instantané avec acompte.</B> Vous confirmez tout de suite, mais vous encaissez par carte une part du total
          pour que la réservation engage le client. Notre guide sur{' '}
          <A to="/fr/guides/direct-booking-deposits/">l'acompte sur les réservations en direct</A> explique comment en fixer
          le pourcentage et rédiger les conditions.
        </Li>
        <Li>
          <B>Liste d'attente quand c'est complet.</B> Pour les cours et les terrains, un créneau complet ne clôt pas
          forcément la discussion. La liste d'attente recueille ceux qui prendraient une place en cas de désistement.
        </Li>
      </Ul>

      <H2>Répondre aux demandes : rapidité et refus courtois</H2>
      <P>
        Si vous choisissez les demandes, la rapidité de votre réponse fait partie de ce que vous vendez. Un client qui a une
        réponse dans l'heure se sent pris en charge ; celui qui n'a rien avant le lendemain a peut-être déjà réservé
        ailleurs. Pour donner un repère, l'une des grandes plateformes de location de vacances laisse aux hôtes{' '}
        <Ext href={RESPOND_URL}>24 heures pour accepter ou refuser une demande</Ext>, après quoi elle expire, en octobre
        2026. Sur votre propre site, personne ne vous impose de délai : fixez le vôtre et annoncez-le sur la page.
      </P>
      <P>
        Refuser fait partie du métier. Dites non rapidement, donnez la raison en une phrase quand c'est possible et proposez
        une alternative si vous en avez une : d'autres dates, une autre chambre, une adresse amie à proximité. Un non clair
        aujourd'hui vaut mieux qu'un peut-être flou demain.
      </P>
      <Note title="Exemple de réponse de refus">
        <p>
          Merci pour votre demande du 12 au 15 mai. Malheureusement, nous ne pouvons pas accueillir un groupe de six
          personnes à ces dates, notre plus grande chambre étant prévue pour quatre. Nous avons en revanche deux chambres
          libres à partir du 19 mai, si vos dates sont souples. Dans tous les cas, nous espérons vous recevoir une autre
          fois.
        </p>
      </Note>
      <P>
        Gardez sous la main quelques réponses de ce type à adapter : accepter, proposer une autre date, refuser. Une tâche
        de dix minutes en prend deux, et répondre vite devient réaliste même les jours chargés.
      </P>

      <H2>Comment cela fonctionne dans Likwiid Direct</H2>
      <P>
        <A to="/fr/direct/">Likwiid Direct</A> propose les deux modes, et vous passez de l'un à l'autre depuis l'espace
        propriétaire. En mode demande, le client choisit ses dates, le nombre de personnes et les options, voit un total
        estimé et envoie sa demande ; rien n'est réservé ni encaissé tant que vous n'avez pas confirmé, proposé une autre
        date ou refusé depuis votre espace. En réservation instantanée, le client règle par carte un acompte, un pourcentage
        du total, sur votre propre compte de paiement, et voit l'acompte et le solde à payer à l'arrivée avant de payer.
      </P>
      <P>
        Pour les activités, chaque créneau a une capacité, le client voit le nombre de places restantes et une liste
        d'attente s'ouvre quand le créneau est complet. Des règles comme la durée minimale de séjour et le délai de
        prévenance s'appliquent dans les deux modes, et vos conditions d'annulation et de paiement figurent à la dernière
        étape : personne ne peut réserver ni envoyer une demande sans cocher qu'il les a lues.
      </P>
    </GuideLayout>
  )
}
