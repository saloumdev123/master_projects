package sen.saloum.JobConnect.dto;

import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.OffsetDateTime;

@Data
public class MessageDto {
    private Long id;
    private Long senderId;
    private String senderUsername;
    private Long recipientId;
    private String recipientUsername;
    private String content;
    private OffsetDateTime sentAt;
    private boolean isRead;
    private Long parentMessageId;
}
