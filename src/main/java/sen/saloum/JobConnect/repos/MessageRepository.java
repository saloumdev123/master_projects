package sen.saloum.JobConnect.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sen.saloum.JobConnect.model.Message;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    // ✅ Récupère tous les messages échangés entre deux utilisateurs, triés par date
    @Query("SELECT m FROM Message m WHERE " +
            "(m.sender.id = :user1Id AND m.recipient.id = :user2Id) OR " +
            "(m.sender.id = :user2Id AND m.recipient.id = :user1Id) " +
            "ORDER BY m.sentAt ASC")
    List<Message> findConversationBetweenUsers(Long user1Id, Long user2Id);
}
